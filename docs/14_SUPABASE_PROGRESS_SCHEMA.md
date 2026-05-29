# Supabase Progress Schema (MVP)

## Purpose

This document explains the SQL schema in `supabase/schema.sql` for FluentStack progress persistence for authenticated users.

Scope in this phase:
- Create progress tables in Supabase
- Enable strict Row Level Security (RLS)
- Keep guest mode behavior unchanged (still localStorage)

Out of scope in this phase:
- TypeScript progress service migration to Supabase
- guest-to-account merge
- protected routes

## Tables

### `profiles`
Purpose:
- Store basic user profile information linked to `auth.users`.

Key columns:
- `id` (uuid, PK, references `auth.users(id)`, cascade delete)
- `full_name` (text)
- `avatar_url` (text)
- `created_at`, `updated_at` (timestamptz)

### `lesson_progress`
Purpose:
- Store per-user per-lesson completion state.

Key columns:
- `user_id` (uuid, FK -> `auth.users`)
- `lesson_id` (text)
- `completed_block_ids` (jsonb array)
- `progress_percent` (integer 0..100)
- `is_completed` (boolean)
- unique constraint: `(user_id, lesson_id)`

### `quiz_attempts`
Purpose:
- Store quiz attempt history for score and answer review.

Key columns:
- `user_id` (uuid, FK -> `auth.users`)
- `quiz_id` (text)
- `lesson_id` (text)
- `score` (integer 0..100)
- `answers` (jsonb object)
- `passed` (boolean)

### `challenge_progress`
Purpose:
- Store coding challenge state (saved code, checklist, completion).

Key columns:
- `user_id` (uuid, FK -> `auth.users`)
- `challenge_id` (text)
- `lesson_id` (text)
- `saved_code` (jsonb object)
- `completed_checklist_items` (jsonb array)
- `is_completed` (boolean)
- unique constraint: `(user_id, challenge_id)`

### `writing_drafts`
Purpose:
- Store writing-practice drafts and completion per block.

Key columns:
- `user_id` (uuid, FK -> `auth.users`)
- `lesson_id` (text)
- `block_id` (text)
- `content` (text)
- `is_completed` (boolean)
- unique constraint: `(user_id, block_id)`

### `user_stats`
Purpose:
- Store denormalized XP and streak totals.

Key columns:
- `user_id` (uuid, PK, FK -> `auth.users`)
- `total_xp` (integer >= 0)
- `streak_count` (integer >= 0)
- `last_activity_date` (date)
- `created_at`, `updated_at` (timestamptz)

## RLS Behavior

RLS is enabled on all user-specific tables:
- `profiles`
- `lesson_progress`
- `quiz_attempts`
- `challenge_progress`
- `writing_drafts`
- `user_stats`

Policy model:
- `SELECT`, `INSERT`, `UPDATE`, `DELETE` are allowed only for the current authenticated user’s own rows.
- Explicit checks are used:
  - `auth.uid() IS NOT NULL AND auth.uid() = user_id`
  - For `profiles`: `auth.uid() IS NOT NULL AND auth.uid() = id`

There are no public-read policies and no admin/service-role policies in this SQL.

## Indexing and Triggers

Indexes are added for:
- common user filters (`user_id`)
- content identifiers (`lesson_id`, `quiz_id`, `challenge_id`, `block_id`)

A shared trigger function `public.set_updated_at()` updates `updated_at` on:
- `profiles`
- `lesson_progress`
- `challenge_progress`
- `writing_drafts`
- `user_stats`

## Guest Mode (No Change)

Guest users still use localStorage only.

Current localStorage shape (from app types):
- `completedBlockIds`
- `completedLessonIds`
- `quizScores`
- `challengeProgress`
- `writingDrafts`
- `totalXp`
- `lastActivityDate`
- `streakCount`

No app behavior changes are introduced by this SQL-only phase.

## What Comes Next

After running `supabase/schema.sql` in Supabase SQL Editor:
1. Implement Supabase-backed progress service for logged-in users.
2. Keep guest localStorage path as fallback.
3. Add runtime selection in progress service based on auth state.
4. Add safe migration strategy later (optional) for guest-to-account import.
