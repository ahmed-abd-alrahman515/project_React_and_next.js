import { Flame, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { NavigationState } from '../types';

interface FooterProps {
  onNavigate: (page: NavigationState) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    onNavigate({ currentPage: page as any });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pf-dark border-t border-pf-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Flame className="w-8 h-8 text-pf-pink" />
              <span className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
                Pixel Flame
              </span>
            </div>
            <p className="text-pf-text-secondary mb-6 max-w-md">
              Crafting exceptional digital experiences with cutting-edge technology.
              We transform ideas into powerful, scalable solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-pf-purple/10 flex items-center justify-center text-pf-text-secondary hover:text-pf-pink hover:bg-pf-purple/20 transition-all duration-300 hover:shadow-neon-purple"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-pf-purple/10 flex items-center justify-center text-pf-text-secondary hover:text-pf-cyan hover:bg-pf-blue/20 transition-all duration-300 hover:shadow-neon-cyan"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@pixelflame.com"
                className="w-10 h-10 rounded-lg bg-pf-purple/10 flex items-center justify-center text-pf-text-secondary hover:text-pf-pink hover:bg-pf-purple/20 transition-all duration-300 hover:shadow-neon-purple"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-pf-text font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item.toLowerCase())}
                    className="text-pf-text-secondary hover:text-pf-pink transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-pf-text font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-pf-text-secondary">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 text-pf-purple" />
                <span>hello@pixelflame.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 text-pf-cyan" />
                <span>Global Remote Team</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pf-purple/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-pf-text-secondary text-sm">
              © {currentYear} Pixel Flame. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-pf-text-secondary">
              <button className="hover:text-pf-pink transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-pf-pink transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
