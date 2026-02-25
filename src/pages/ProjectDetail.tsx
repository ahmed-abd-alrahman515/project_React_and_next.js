import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { supabase, Project } from '../lib/supabase';
import { NavigationState } from '../types';

interface ProjectDetailProps {
  slug: string;
  onNavigate: (page: NavigationState) => void;
}

export default function ProjectDetail({ slug, onNavigate }: ProjectDetailProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    loadProject();
  }, [slug]);

  const loadProject = async () => {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (data) setProject(data);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return 'from-pf-purple to-pf-pink';
      case 'mobile': return 'from-pf-pink to-pf-accent-pink';
      case 'backend': return 'from-pf-blue to-pf-cyan';
      case 'uiux': return 'from-pf-cyan to-pf-accent-cyan';
      default: return 'from-pf-purple to-pf-cyan';
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-pf-black pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pf-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-pf-text-secondary">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pf-black pt-20">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate({ currentPage: 'projects' })}
            className="flex items-center space-x-2 text-pf-text-secondary hover:text-pf-pink transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </button>
        </div>
      </section>

      <section className={`pb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className={`inline-block px-4 py-1.5 text-sm font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full text-white uppercase tracking-wide mb-4`}>
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-pf-text mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-pf-text-secondary">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {project.timeline && (
                <div className="bg-pf-dark rounded-xl p-6 border border-pf-purple/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="w-5 h-5 text-pf-pink" />
                    <h3 className="text-lg font-semibold text-pf-text">Timeline</h3>
                  </div>
                  <p className="text-pf-text-secondary">{project.timeline}</p>
                </div>
              )}

              <div className="bg-pf-dark rounded-xl p-6 border border-pf-purple/20">
                <h3 className="text-lg font-semibold text-pf-text mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-pf-purple/10 text-pf-accent-purple rounded-lg border border-pf-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 border border-pf-purple/30" data-animate="fadeIn">
            {project.image_url ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(project.category)}`}></div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {project.problem && (
              <div className="bg-pf-dark rounded-xl p-8 border border-pf-purple/20">
                <h2 className="text-2xl font-display font-bold text-pf-text mb-4">The Challenge</h2>
                <p className="text-pf-text-secondary leading-relaxed whitespace-pre-line">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-pf-dark rounded-xl p-8 border border-pf-cyan/20">
                <h2 className="text-2xl font-display font-bold text-pf-text mb-4">The Solution</h2>
                <p className="text-pf-text-secondary leading-relaxed whitespace-pre-line">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-pf-text mb-8">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-xl overflow-hidden border border-pf-purple/20 hover:border-pf-cyan/50 transition-all duration-300 group"
                    data-animate="zoomIn"
                    data-animate-delay={`${index * 0.1}s`}
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.results && (
            <div className="bg-gradient-to-br from-pf-purple/10 to-pf-cyan/10 rounded-2xl p-8 border border-pf-purple/30 mb-12">
              <h2 className="text-3xl font-display font-bold text-pf-text mb-6">Results & Impact</h2>
              <div className="text-pf-text-secondary leading-relaxed whitespace-pre-line">
                {project.results.split('\n').map((line, index) => (
                  <div key={index} className="flex items-start space-x-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-pf-pink mt-0.5 flex-shrink-0" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pf-purple/10 to-pf-cyan/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-pf-black/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-pf-text">
            Have a Similar Project in Mind?
          </h2>
          <p className="text-xl text-pf-text-secondary mb-8">
            Let's discuss how we can bring your vision to life with the same excellence.
          </p>
          <button
            onClick={() => onNavigate({ currentPage: 'contact' })}
            className="px-10 py-5 bg-gradient-primary rounded-lg font-semibold text-pf-text text-lg hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
