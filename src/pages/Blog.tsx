import { useState, useEffect } from 'react';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { supabase, BlogPost } from '../lib/supabase';
import { NavigationState } from '../types';

interface BlogProps {
  onNavigate: (page: NavigationState) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (data) setPosts(data);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-pf-black pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pf-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pf-cyan/10 rounded-full blur-3xl"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-pf-text-secondary max-w-3xl mx-auto">
              Insights, tutorials, and industry trends from the Pixel Flame team
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-pf-text-secondary">No blog posts yet.</p>
              <p className="text-pf-text-secondary mt-4">Check back soon for our latest insights and updates!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={post.id}
                  onClick={() => onNavigate({ currentPage: 'blog-detail', blogSlug: post.slug })}
                  className="group cursor-pointer bg-pf-dark rounded-xl overflow-hidden border border-pf-purple/20 hover:border-pf-cyan/50 transition-all duration-300 hover:shadow-neon-cyan hover:-translate-y-2"
                  data-animate="fadeInUp"
                  data-animate-delay={`${index * 0.1}s`}
                >
                  {post.image_url ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-pf-purple/30 to-pf-cyan/30"></div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-pf-text-secondary mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{estimateReadTime(post.content)}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold text-pf-text mb-3 group-hover:text-pf-cyan transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-pf-text-secondary mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center space-x-1 px-2 py-1 text-xs bg-pf-purple/10 text-pf-accent-purple rounded border border-pf-purple/30"
                          >
                            <Tag className="w-3 h-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center text-pf-pink font-medium group-hover:text-pf-cyan transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
