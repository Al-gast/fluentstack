-- FluentStack Supabase Progress Schema (MVP)
-- Scope: auth-linked profile + progress persistence tables + strict per-user RLS.
-- This file is idempotent where practical.

-- 1) Extension needed for gen_random_uuid()
create extension if not exists pgcrypto;

-- 2) Generic updated_at trigger function
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 3) Tables

-- profiles: basic user profile attached to auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- lesson_progress: block completion and lesson progress state
create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  completed_block_ids jsonb not null default '[]'::jsonb,
  progress_percent integer not null default 0,
  is_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lesson_progress_user_lesson_unique unique (user_id, lesson_id),
  constraint lesson_progress_percent_range check (progress_percent >= 0 and progress_percent <= 100)
);

-- quiz_attempts: attempt history for quiz runs
create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_id text not null,
  lesson_id text not null,
  score integer not null,
  answers jsonb not null default '{}'::jsonb,
  passed boolean not null default false,
  created_at timestamptz not null default now(),
  constraint quiz_attempts_score_range check (score >= 0 and score <= 100)
);

-- challenge_progress: coding challenge progress and saved code
create table if not exists public.challenge_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  challenge_id text not null,
  lesson_id text not null,
  saved_code jsonb not null default '{}'::jsonb,
  completed_checklist_items jsonb not null default '[]'::jsonb,
  is_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint challenge_progress_user_challenge_unique unique (user_id, challenge_id)
);

-- writing_drafts: writing-practice block drafts and completion state
create table if not exists public.writing_drafts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  block_id text not null,
  content text not null default '',
  is_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint writing_drafts_user_block_unique unique (user_id, block_id)
);

-- user_stats: denormalized totals for XP and streak
create table if not exists public.user_stats (
  user_id uuid primary key references auth.users(id) on delete cascade,
  total_xp integer not null default 0,
  streak_count integer not null default 0,
  last_activity_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint user_stats_total_xp_non_negative check (total_xp >= 0),
  constraint user_stats_streak_non_negative check (streak_count >= 0)
);

-- 4) Indexes
create index if not exists idx_lesson_progress_user_id on public.lesson_progress (user_id);
create index if not exists idx_lesson_progress_lesson_id on public.lesson_progress (lesson_id);

create index if not exists idx_quiz_attempts_user_id on public.quiz_attempts (user_id);
create index if not exists idx_quiz_attempts_quiz_id on public.quiz_attempts (quiz_id);
create index if not exists idx_quiz_attempts_lesson_id on public.quiz_attempts (lesson_id);
create index if not exists idx_quiz_attempts_user_quiz on public.quiz_attempts (user_id, quiz_id);

create index if not exists idx_challenge_progress_user_id on public.challenge_progress (user_id);
create index if not exists idx_challenge_progress_challenge_id on public.challenge_progress (challenge_id);
create index if not exists idx_challenge_progress_lesson_id on public.challenge_progress (lesson_id);

create index if not exists idx_writing_drafts_user_id on public.writing_drafts (user_id);
create index if not exists idx_writing_drafts_block_id on public.writing_drafts (block_id);
create index if not exists idx_writing_drafts_lesson_id on public.writing_drafts (lesson_id);

-- 5) updated_at triggers

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

drop trigger if exists set_lesson_progress_updated_at on public.lesson_progress;
create trigger set_lesson_progress_updated_at
before update on public.lesson_progress
for each row
execute function public.set_updated_at();

drop trigger if exists set_challenge_progress_updated_at on public.challenge_progress;
create trigger set_challenge_progress_updated_at
before update on public.challenge_progress
for each row
execute function public.set_updated_at();

drop trigger if exists set_writing_drafts_updated_at on public.writing_drafts;
create trigger set_writing_drafts_updated_at
before update on public.writing_drafts
for each row
execute function public.set_updated_at();

drop trigger if exists set_user_stats_updated_at on public.user_stats;
create trigger set_user_stats_updated_at
before update on public.user_stats
for each row
execute function public.set_updated_at();

-- 6) RLS
alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.challenge_progress enable row level security;
alter table public.writing_drafts enable row level security;
alter table public.user_stats enable row level security;

-- profiles policies (match auth user id against profiles.id)
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using (auth.uid() is not null and auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles
for update
to authenticated
using (auth.uid() is not null and auth.uid() = id)
with check (auth.uid() is not null and auth.uid() = id);

drop policy if exists "profiles_delete_own" on public.profiles;
create policy "profiles_delete_own"
on public.profiles
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = id);

-- lesson_progress policies
drop policy if exists "lesson_progress_select_own" on public.lesson_progress;
create policy "lesson_progress_select_own"
on public.lesson_progress
for select
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "lesson_progress_insert_own" on public.lesson_progress;
create policy "lesson_progress_insert_own"
on public.lesson_progress
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "lesson_progress_update_own" on public.lesson_progress;
create policy "lesson_progress_update_own"
on public.lesson_progress
for update
to authenticated
using (auth.uid() is not null and auth.uid() = user_id)
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "lesson_progress_delete_own" on public.lesson_progress;
create policy "lesson_progress_delete_own"
on public.lesson_progress
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);

-- quiz_attempts policies
drop policy if exists "quiz_attempts_select_own" on public.quiz_attempts;
create policy "quiz_attempts_select_own"
on public.quiz_attempts
for select
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "quiz_attempts_insert_own" on public.quiz_attempts;
create policy "quiz_attempts_insert_own"
on public.quiz_attempts
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "quiz_attempts_update_own" on public.quiz_attempts;
create policy "quiz_attempts_update_own"
on public.quiz_attempts
for update
to authenticated
using (auth.uid() is not null and auth.uid() = user_id)
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "quiz_attempts_delete_own" on public.quiz_attempts;
create policy "quiz_attempts_delete_own"
on public.quiz_attempts
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);

-- challenge_progress policies
drop policy if exists "challenge_progress_select_own" on public.challenge_progress;
create policy "challenge_progress_select_own"
on public.challenge_progress
for select
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "challenge_progress_insert_own" on public.challenge_progress;
create policy "challenge_progress_insert_own"
on public.challenge_progress
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "challenge_progress_update_own" on public.challenge_progress;
create policy "challenge_progress_update_own"
on public.challenge_progress
for update
to authenticated
using (auth.uid() is not null and auth.uid() = user_id)
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "challenge_progress_delete_own" on public.challenge_progress;
create policy "challenge_progress_delete_own"
on public.challenge_progress
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);

-- writing_drafts policies
drop policy if exists "writing_drafts_select_own" on public.writing_drafts;
create policy "writing_drafts_select_own"
on public.writing_drafts
for select
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "writing_drafts_insert_own" on public.writing_drafts;
create policy "writing_drafts_insert_own"
on public.writing_drafts
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "writing_drafts_update_own" on public.writing_drafts;
create policy "writing_drafts_update_own"
on public.writing_drafts
for update
to authenticated
using (auth.uid() is not null and auth.uid() = user_id)
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "writing_drafts_delete_own" on public.writing_drafts;
create policy "writing_drafts_delete_own"
on public.writing_drafts
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);

-- user_stats policies (match auth user id against user_stats.user_id)
drop policy if exists "user_stats_select_own" on public.user_stats;
create policy "user_stats_select_own"
on public.user_stats
for select
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "user_stats_insert_own" on public.user_stats;
create policy "user_stats_insert_own"
on public.user_stats
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "user_stats_update_own" on public.user_stats;
create policy "user_stats_update_own"
on public.user_stats
for update
to authenticated
using (auth.uid() is not null and auth.uid() = user_id)
with check (auth.uid() is not null and auth.uid() = user_id);

drop policy if exists "user_stats_delete_own" on public.user_stats;
create policy "user_stats_delete_own"
on public.user_stats
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);
