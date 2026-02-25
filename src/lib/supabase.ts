import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  file_url?: string;
  status?: string;
  created_at?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url?: string;
  author: string;
  tags?: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'web' | 'mobile' | 'backend' | 'uiux';
  description: string;
  problem?: string;
  solution?: string;
  tech_stack: string[];
  image_url: string;
  screenshots?: string[];
  timeline?: string;
  results?: string;
  featured: boolean;
  created_at: string;
}
