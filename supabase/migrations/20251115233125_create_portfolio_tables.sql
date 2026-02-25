/*
  # Pixel Flame Portfolio Database Schema

  ## Overview
  Creates the database structure for the Pixel Flame portfolio website including
  contact form submissions, blog posts, and projects.

  ## New Tables

  ### 1. contact_submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text, required) - Sender's name
  - `email` (text, required) - Sender's email
  - `subject` (text, optional) - Message subject
  - `message` (text, required) - Message content
  - `file_url` (text, optional) - Uploaded file URL
  - `created_at` (timestamptz) - Submission timestamp
  - `status` (text) - Status: new, read, responded

  ### 2. blog_posts
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text, required) - Post title
  - `slug` (text, unique, required) - URL-friendly slug
  - `excerpt` (text, required) - Short summary
  - `content` (text, required) - Full article content (Markdown)
  - `image_url` (text, optional) - Featured image
  - `author` (text) - Author name
  - `tags` (text[], optional) - Article tags
  - `published` (boolean) - Publication status
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 3. projects
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text, required) - Project name
  - `slug` (text, unique, required) - URL-friendly slug
  - `category` (text, required) - web, mobile, backend, uiux
  - `description` (text, required) - Short summary
  - `problem` (text) - Problem statement
  - `solution` (text) - Solution description
  - `tech_stack` (text[], required) - Technologies used
  - `image_url` (text, required) - Main project image
  - `screenshots` (text[], optional) - Additional screenshots
  - `timeline` (text, optional) - Project duration
  - `results` (text, optional) - Outcomes/metrics
  - `featured` (boolean) - Show on home page
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for blog_posts and projects (published only)
  - Contact submissions are write-only for public, read for authenticated admins
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  file_url text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text,
  author text DEFAULT 'Pixel Flame Team',
  tags text[],
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  problem text,
  solution text,
  tech_stack text[] NOT NULL,
  image_url text NOT NULL,
  screenshots text[],
  timeline text,
  results text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Contact submissions policies (public can insert, authenticated can read)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Blog posts policies (public can read published posts)
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Projects policies (public can read all projects)
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can manage projects"
  ON projects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at DESC);