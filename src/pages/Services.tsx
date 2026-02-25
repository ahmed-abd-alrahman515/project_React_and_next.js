import { useEffect, useState } from 'react';
import { Code, Server, Smartphone, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { NavigationState } from '../types';

interface ServicesProps {
  onNavigate: (page: NavigationState) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Front-End Development',
      gradient: 'from-pf-purple to-pf-pink',
      description: 'We create stunning, responsive user interfaces that captivate users and drive engagement. Our front-end solutions combine cutting-edge technologies with intuitive design principles.',
      deliverables: [
        'Responsive web applications',
        'Single Page Applications (SPAs)',
        'Progressive Web Apps (PWAs)',
        'Cross-browser compatible interfaces',
        'Performance-optimized code',
        'Accessibility compliance (WCAG)',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5/CSS3', 'Redux', 'Zustand'],
      examples: [
        'E-commerce platforms with seamless shopping experiences',
        'Interactive dashboards and admin panels',
        'Landing pages with high conversion rates',
        'Portfolio and corporate websites',
      ],
    },
    {
      icon: Server,
      title: 'Back-End Development',
      gradient: 'from-pf-blue to-pf-cyan',
      description: 'Robust, scalable server-side solutions that power your applications. We build secure APIs, databases, and cloud infrastructure that handle growth effortlessly.',
      deliverables: [
        'RESTful and GraphQL APIs',
        'Database design and optimization',
        'Authentication and authorization',
        'Third-party API integrations',
        'Cloud deployment and scaling',
        'Server-side business logic',
      ],
      technologies: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker'],
      examples: [
        'Scalable microservices architectures',
        'Real-time chat and notification systems',
        'Payment processing integrations',
        'Content management systems',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      gradient: 'from-pf-pink to-pf-accent-pink',
      description: 'Native-quality mobile applications for iOS and Android. We leverage React Native to deliver cross-platform apps that look and feel native, saving time and cost.',
      deliverables: [
        'Cross-platform iOS & Android apps',
        'Native performance and feel',
        'Offline functionality',
        'Push notifications',
        'In-app purchases',
        'App Store deployment',
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'Native Modules', 'Firebase', 'Redux'],
      examples: [
        'Social networking apps',
        'E-commerce mobile platforms',
        'Fitness and health tracking apps',
        'On-demand service applications',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      gradient: 'from-pf-cyan to-pf-accent-cyan',
      description: 'User-centered design that combines aesthetics with functionality. We create intuitive interfaces that users love, backed by research and best practices.',
      deliverables: [
        'User research and personas',
        'Wireframes and prototypes',
        'High-fidelity mockups',
        'Design systems and style guides',
        'Usability testing',
        'Responsive designs for all devices',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Principle'],
      examples: [
        'Complete brand identity systems',
        'Mobile app UI/UX redesigns',
        'SaaS dashboard interfaces',
        'E-commerce user flows',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-pf-black pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pf-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pf-cyan/10 rounded-full blur-3xl"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-pf-text-secondary max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 shadow-lg`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h2 className="text-4xl font-display font-bold text-pf-text mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-pf-text-secondary mb-6">
                  {service.description}
                </p>

                <div className="bg-pf-dark rounded-xl p-6 border border-pf-purple/20 mb-6">
                  <h3 className="text-xl font-semibold text-pf-text mb-4">What You Get:</h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-pf-pink mt-0.5 flex-shrink-0" />
                        <span className="text-pf-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-pf-dark rounded-xl p-6 border border-pf-purple/20 hover:border-pf-pink/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-pf-text mb-4">Technologies We Use:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-pf-purple/10 text-pf-accent-purple rounded-lg border border-pf-purple/30 hover:bg-pf-purple/20 hover:border-pf-pink/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-pf-dark rounded-xl p-6 border border-pf-cyan/20 hover:border-pf-cyan/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-pf-text mb-4">Example Projects:</h3>
                  <ul className="space-y-2">
                    {service.examples.map((example, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <ArrowRight className="w-5 h-5 text-pf-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-pf-text-secondary">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pf-purple/10 to-pf-cyan/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-pf-black/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-pf-text">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-pf-text-secondary mb-8">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <button
            onClick={() => onNavigate({ currentPage: 'contact' })}
            className="px-10 py-5 bg-gradient-primary rounded-lg font-semibold text-pf-text text-lg hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105"
          >
            Get a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
