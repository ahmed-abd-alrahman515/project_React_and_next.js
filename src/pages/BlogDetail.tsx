import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { supabase, BlogPost } from '../lib/supabase';
import { NavigationState } from '../types';

interface BlogDetailProps {
  slug: string;
  onNavigate: (page: NavigationState) => void;
}

export default function BlogDetail({ slug, onNavigate }: BlogDetailProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (data) setPost(data);
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

  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-display font-bold text-pf-text mb-6 mt-8">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-display font-bold text-pf-text mb-4 mt-6">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-display font-bold text-pf-text mb-3 mt-5">{line.substring(4)}</h3>;
      }
      if (line.trim() === '') {
        return <div key={index} className="h-4"></div>;
      }
      return <p key={index} className="text-pf-text-secondary leading-relaxed mb-4">{line}</p>;
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-pf-black pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pf-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-pf-text-secondary">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pf-black pt-20">
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate({ currentPage: 'blog' })}
            className="flex items-center space-x-2 text-pf-text-secondary hover:text-pf-pink transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </button>
        </div>
      </section>

      <article className={`pb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-pf-text mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-pf-text-secondary mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-pf-purple" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-pf-pink" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-pf-cyan" />
                <span>{estimateReadTime(post.content)}</span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center space-x-1 px-3 py-1.5 text-sm bg-pf-purple/10 text-pf-accent-purple rounded-lg border border-pf-purple/30"
                  >
                    <Tag className="w-4 h-4" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}

            {post.image_url && (
              <div className="relative h-96 rounded-2xl overflow-hidden border border-pf-purple/30 mb-8">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <p className="text-xl text-pf-text-secondary leading-relaxed italic border-l-4 border-pf-pink pl-6">
              {post.excerpt}
            </p>
          </header>

          <div className="prose prose-invert max-w-none">
            <div className="text-lg">
              {renderMarkdown(post.content)}
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-pf-purple/20">
            <div className="bg-pf-dark rounded-xl p-8 border border-pf-purple/20">
              <h3 className="text-2xl font-display font-bold text-pf-text mb-4">About the Author</h3>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-pf-text font-semibold mb-2">{post.author}</p>
                  <p className="text-pf-text-secondary">
                    Part of the Pixel Flame team, passionate about creating exceptional digital experiences
                    and sharing knowledge with the community.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>

      <section className="py-20 bg-gradient-to-br from-pf-purple/10 to-pf-cyan/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-pf-black/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-pf-text">
            Enjoyed This Article?
          </h2>
          <p className="text-xl text-pf-text-secondary mb-8">
            Check out more insights and updates from the Pixel Flame team.
          </p>
          <button
            onClick={() => onNavigate({ currentPage: 'blog' })}
            className="px-10 py-5 bg-gradient-primary rounded-lg font-semibold text-pf-text text-lg hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105"
          >
            Read More Articles
          </button>
        </div>
      </section>
    </div>
  );
}
