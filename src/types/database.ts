export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      lesson_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          completed_block_ids: Json;
          progress_percent: number;
          is_completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lesson_id: string;
          completed_block_ids?: Json;
          progress_percent?: number;
          is_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          lesson_id?: string;
          completed_block_ids?: Json;
          progress_percent?: number;
          is_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      quiz_attempts: {
        Row: {
          id: string;
          user_id: string;
          quiz_id: string;
          lesson_id: string;
          score: number;
          answers: Json;
          passed: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          quiz_id: string;
          lesson_id: string;
          score: number;
          answers?: Json;
          passed?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          quiz_id?: string;
          lesson_id?: string;
          score?: number;
          answers?: Json;
          passed?: boolean;
          created_at?: string;
        };
      };
      challenge_progress: {
        Row: {
          id: string;
          user_id: string;
          challenge_id: string;
          lesson_id: string;
          saved_code: Json;
          completed_checklist_items: Json;
          is_completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          challenge_id: string;
          lesson_id: string;
          saved_code?: Json;
          completed_checklist_items?: Json;
          is_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          challenge_id?: string;
          lesson_id?: string;
          saved_code?: Json;
          completed_checklist_items?: Json;
          is_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      writing_drafts: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          block_id: string;
          content: string;
          is_completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lesson_id: string;
          block_id: string;
          content?: string;
          is_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          lesson_id?: string;
          block_id?: string;
          content?: string;
          is_completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_stats: {
        Row: {
          user_id: string;
          total_xp: number;
          streak_count: number;
          last_activity_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          total_xp?: number;
          streak_count?: number;
          last_activity_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          total_xp?: number;
          streak_count?: number;
          last_activity_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};
