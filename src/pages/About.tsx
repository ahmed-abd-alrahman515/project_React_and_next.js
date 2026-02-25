import { useEffect, useState } from 'react';
import { Target, Eye, Code2, Database, Smartphone, Layers, Cloud, Zap } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { icon: Code2, name: 'React & Next.js', color: 'from-pf-purple to-pf-pink' },
    { icon: Database, name: 'Node.js & APIs', color: 'from-pf-blue to-pf-cyan' },
    { icon: Smartphone, name: 'React Native', color: 'from-pf-pink to-pf-accent-pink' },
    { icon: Layers, name: 'UI/UX Design', color: 'from-pf-cyan to-pf-accent-cyan' },
    { icon: Cloud, name: 'Cloud Services', color: 'from-pf-purple to-pf-blue' },
    { icon: Zap, name: 'Performance', color: 'from-pf-accent-pink to-pf-cyan' },
  ];

  const techStack = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
    backend: ['Node.js', 'Express', 'NestJS', 'Python', 'PostgreSQL', 'MongoDB'],
    mobile: ['React Native', 'iOS', 'Android', 'Flutter'],
    tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Adobe XD'],
  };

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
              About Pixel Flame
            </h1>
            <p className="text-xl text-pf-text-secondary max-w-3xl mx-auto">
              We are a team of passionate developers and designers dedicated to creating exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl"></div>
              <div className="relative bg-pf-dark rounded-2xl p-8 border border-pf-purple/30">
                <h2 className="text-3xl font-display font-bold text-pf-text mb-6">Our Story</h2>
                <div className="space-y-4 text-pf-text-secondary">
                  <p>
                    Pixel Flame was born from a passion for creating digital experiences that truly matter.
                    We believe that great software is more than just code—it's about solving real problems
                    and making a meaningful impact.
                  </p>
                  <p>
                    Our journey began with a simple mission: to bridge the gap between cutting-edge technology
                    and beautiful design. Today, we work with startups, growing businesses, and established
                    enterprises to bring their digital visions to life.
                  </p>
                  <p>
                    Every project we undertake is treated as a unique challenge, combining technical expertise
                    with creative innovation to deliver solutions that exceed expectations. We don't just build
                    applications—we craft experiences that users love.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-pf-dark rounded-xl p-6 border border-pf-purple/20 hover:border-pf-pink/50 transition-all duration-300 hover:shadow-neon-purple hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} p-3 mb-4`}>
                    <skill.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-pf-text font-semibold">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pf-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-pf-dark rounded-2xl p-8 border border-pf-purple/30 hover:border-pf-pink/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary p-3">
                  <Target className="w-full h-full text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-pf-text">Our Mission</h2>
              </div>
              <p className="text-pf-text-secondary text-lg leading-relaxed">
                To empower businesses and individuals by delivering innovative, scalable, and user-centric
                digital solutions. We strive to transform complex challenges into elegant, efficient
                applications that drive real results and create lasting value.
              </p>
            </div>

            <div className="bg-pf-dark rounded-2xl p-8 border border-pf-cyan/30 hover:border-pf-cyan/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-secondary p-3">
                  <Eye className="w-full h-full text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-pf-text">Our Vision</h2>
              </div>
              <p className="text-pf-text-secondary text-lg leading-relaxed">
                To be recognized as a leading force in digital innovation, known for creating exceptional
                experiences that seamlessly blend technology with human-centered design. We envision a
                future where every interaction delights users and every solution exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Tech Stack
            </h2>
            <p className="text-pf-text-secondary text-lg max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="bg-pf-dark rounded-xl p-6 border border-pf-purple/20">
                <h3 className="text-xl font-semibold text-pf-text mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-pf-purple/10 text-pf-accent-purple rounded-full border border-pf-purple/30 hover:bg-pf-purple/20 hover:border-pf-pink/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pf-purple/10 to-pf-cyan/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-pf-black/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-pf-text">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-pf-text-secondary mb-8">
            Ready to start your next project? We're here to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-primary rounded-lg font-semibold text-pf-text hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105">
              Start a Project
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-pf-cyan rounded-lg font-semibold text-pf-cyan hover:bg-pf-cyan/10 hover:shadow-neon-cyan transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
