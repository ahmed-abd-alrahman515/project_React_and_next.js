import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { supabase, Project } from '../lib/supabase';
import { NavigationState } from '../types';

interface ProjectsProps {
  onNavigate: (page: NavigationState) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    loadProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [activeFilter, projects]);

  const loadProjects = async () => {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setProjects(data);
      setFilteredProjects(data);
    }
  };

  const filterProjects = () => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === activeFilter));
    }
  };

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' },
    { id: 'uiux', label: 'UI/UX' },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return 'from-pf-purple to-pf-pink';
      case 'mobile': return 'from-pf-pink to-pf-accent-pink';
      case 'backend': return 'from-pf-blue to-pf-cyan';
      case 'uiux': return 'from-pf-cyan to-pf-accent-cyan';
      default: return 'from-pf-purple to-pf-cyan';
    }
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
              Our Projects
            </h1>
            <p className="text-xl text-pf-text-secondary max-w-3xl mx-auto">
              Explore our portfolio of successful projects across web, mobile, and backend development
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-pf-text-secondary mt-2.5" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-primary text-white shadow-neon-purple'
                    : 'bg-pf-dark text-pf-text-secondary border border-pf-purple/20 hover:border-pf-pink/50 hover:text-pf-pink'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-pf-text-secondary">No projects found in this category.</p>
              <p className="text-pf-text-secondary mt-4">Check back soon for updates!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => onNavigate({ currentPage: 'project-detail', projectSlug: project.slug })}
                  className="group cursor-pointer bg-pf-dark rounded-xl overflow-hidden border border-pf-purple/20 hover:border-pf-cyan/50 transition-all duration-300 hover:shadow-neon-cyan hover:-translate-y-2"
                  data-animate="fadeInUp"
                  data-animate-delay={`${index * 0.1}s`}
                >
                  <div className="relative h-56 bg-gradient-to-br from-pf-purple/20 to-pf-cyan/20 overflow-hidden">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(project.category)}`}></div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full text-white uppercase tracking-wide`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-pf-text mb-3 group-hover:text-pf-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-pf-text-secondary mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-pf-purple/10 text-pf-accent-purple rounded border border-pf-purple/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech_stack.length > 3 && (
                        <span className="px-2 py-1 text-xs text-pf-text-secondary">
                          +{project.tech_stack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
