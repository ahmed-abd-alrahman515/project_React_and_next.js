export type PageType = 'home' | 'about' | 'services' | 'projects' | 'project-detail' | 'blog' | 'blog-detail' | 'contact';

export interface NavigationState {
  currentPage: PageType;
  projectSlug?: string;
  blogSlug?: string;
}
