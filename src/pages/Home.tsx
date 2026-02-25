import { useState, useEffect } from 'react';
import { ArrowRight, Code, Server, Smartphone, Palette, CheckCircle2, Star } from 'lucide-react';
import { supabase, Project } from '../lib/supabase';
import { NavigationState } from '../types';

interface HomeProps {
  onNavigate: (page: NavigationState) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    loadFeaturedProjects();
  }, []);

  const loadFeaturedProjects = async () => {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .limit(3);

    if (data) setFeaturedProjects(data);
  };

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Beautiful, responsive interfaces built with React, Next.js, and modern web technologies.',
      gradient: 'from-pf-purple to-pf-pink',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Scalable, secure server-side solutions with Node.js, APIs, and cloud infrastructure.',
      gradient: 'from-pf-blue to-pf-cyan',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native-quality mobile applications using React Native for iOS and Android.',
      gradient: 'from-pf-pink to-pf-accent-pink',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered designs that combine aesthetics with exceptional usability.',
      gradient: 'from-pf-cyan to-pf-accent-cyan',
    },
  ];

  const features = [
    { icon: CheckCircle2, title: 'Clean Code', description: 'Maintainable, well-documented code following best practices' },
    { icon: CheckCircle2, title: 'Scalable Solutions', description: 'Architecture designed to grow with your business' },
    { icon: CheckCircle2, title: 'UX-Driven', description: 'Every decision focused on user experience and satisfaction' },
    { icon: CheckCircle2, title: 'On-Time Delivery', description: 'Reliable timelines and consistent communication' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Pixel Flame transformed our vision into a stunning reality. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Digital Ventures',
      text: 'Working with Pixel Flame was a game-changer for our business. They delivered beyond our expectations.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-theme-primary">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pf-purple/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pf-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 inline-flex items-center justify-center space-x-3">
            <div className="w-3 h-3 bg-pf-pink rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-pf-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-pf-cyan rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent" data-animate="fadeInUp">
            Ignite Your Digital Presence
          </h1>

          <p className="text-xl md:text-2xl text-theme-secondary mb-8 max-w-3xl mx-auto" data-animate="fadeInUp" data-animate-delay="0.2s">
            We craft exceptional digital experiences that combine stunning design with powerful technology.
            Your vision, our expertise, infinite possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-animate="fadeInUp" data-animate-delay="0.4s">
            <button
              onClick={() => onNavigate({ currentPage: 'contact' })}
              className="group px-8 py-4 bg-gradient-primary rounded-lg font-semibold text-pf-text flex items-center space-x-2 hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate({ currentPage: 'projects' })}
              className="px-8 py-4 bg-transparent border-2 border-pf-cyan rounded-lg font-semibold text-pf-cyan hover:bg-pf-cyan/10 hover:shadow-neon-cyan transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pf-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent" data-animate="fadeIn">
              Our Services
            </h2>
            <p className="text-pf-text-secondary text-lg max-w-2xl mx-auto">
              From concept to deployment, we deliver comprehensive solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-pf-dark rounded-xl p-6 border border-pf-purple/20 hover:border-pf-pink/50 transition-all duration-300 hover:shadow-neon-purple hover:-translate-y-2"
                data-animate="fadeInUp"
                data-animate-delay={`${index * 0.1}s`}
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-pf-text mb-3">{service.title}</h3>
                <p className="text-pf-text-secondary">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate({ currentPage: 'services' })}
              className="inline-flex items-center space-x-2 text-pf-pink hover:text-pf-cyan transition-colors duration-300 font-semibold"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-pf-text-secondary text-lg max-w-2xl mx-auto">
                Showcase of our recent work and client success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => onNavigate({ currentPage: 'project-detail', projectSlug: project.slug })}
                  className="group cursor-pointer bg-pf-dark rounded-xl overflow-hidden border border-pf-purple/20 hover:border-pf-cyan/50 transition-all duration-300 hover:shadow-neon-cyan hover:-translate-y-2"
                  data-animate="fadeInUp"
                  data-animate-delay={`${index * 0.15}s`}
                >
                  <div className="relative h-48 bg-gradient-to-br from-pf-purple/20 to-pf-cyan/20 overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech_stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-pf-purple/20 text-pf-accent-purple rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-pf-text mb-2 group-hover:text-pf-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-pf-text-secondary">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => onNavigate({ currentPage: 'projects' })}
                className="px-8 py-4 bg-gradient-secondary rounded-lg font-semibold text-pf-text hover:shadow-neon-cyan-lg transition-all duration-300 hover:scale-105"
              >
                View All Projects
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-pf-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-pf-text">
              Why Choose Pixel Flame?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary p-4">
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-pf-text mb-2">{feature.title}</h3>
                <p className="text-pf-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-pf-dark rounded-xl p-8 border border-pf-purple/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-pf-pink fill-current" />
                  ))}
                </div>
                <p className="text-pf-text-secondary text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-pf-text font-semibold">{testimonial.name}</p>
                  <p className="text-pf-text-secondary text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pf-purple/20 to-pf-cyan/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pf-black/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-pf-text">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-pf-text-secondary mb-8">
            Let's turn your vision into reality. Get in touch with us today for a free consultation.
          </p>
          <button
            onClick={() => onNavigate({ currentPage: 'contact' })}
            className="px-10 py-5 bg-gradient-primary rounded-lg font-semibold text-pf-text text-lg hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
