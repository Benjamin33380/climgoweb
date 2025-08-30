import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types pour TypeScript
export interface User {
  id: string
  email: string
  username?: string
  avatar_url?: string
  points_activity: number
  is_banned: boolean
  created_at: string
  last_login?: string
}

export interface Article {
  id: string
  title: string
  slug: string
  content_markdown: string
  image_url?: string
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  published: boolean
  author_id: string
  created_at: string
  updated_at: string
}

export interface Comment {
  id: string
  article_id: string
  user_id: string
  content: string
  is_approved: boolean
  created_at: string
  users?: {
    username?: string
    avatar_url?: string
  }
  articles?: {
    title?: string
    slug?: string
  }
}

export interface Rating {
  id: string
  article_id: string
  user_id: string
  rating: number
  created_at: string
  updated_at?: string
  users?: {
    username?: string
    email?: string
  }
  articles?: {
    title?: string
    slug?: string
  }
}

export interface NewsletterSubscriber {
  id: string
  email: string
  preferences: Record<string, unknown>
  subscribed_at: string
}
