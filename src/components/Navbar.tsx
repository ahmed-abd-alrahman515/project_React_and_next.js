import { useState, useEffect } from 'react';
import { Menu, X, Flame, Sun, Moon } from 'lucide-react';
import { NavigationState } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: NavigationState) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Projects', page: 'projects' },
    { name: 'Blog', page: 'blog' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate({ currentPage: page as any });
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-pf-black/90 backdrop-blur-lg shadow-lg shadow-pf-purple/10'
          : 'bg-transparent'
      }`}
      data-animate="fadeInDown"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative">
              <Flame className="w-8 h-8 text-pf-pink group-hover:text-pf-cyan transition-colors duration-300" />
              <div className="absolute inset-0 bg-pf-pink/30 blur-xl group-hover:bg-pf-cyan/30 transition-colors duration-300"></div>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pixel Flame
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-pf-pink ${
                  currentPage === item.page
                    ? 'text-pf-pink'
                    : 'text-theme-secondary'
                }`}
              >
                {item.name}
                {currentPage === item.page && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary"></span>
                )}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-theme-secondary hover:bg-pf-purple/20 transition-all duration-300 border-theme"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-pf-cyan" />
              ) : (
                <Moon className="w-5 h-5 text-pf-purple" />
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-theme-secondary hover:bg-pf-purple/20 transition-all duration-300 border-theme"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-pf-cyan" />
              ) : (
                <Moon className="w-5 h-5 text-pf-purple" />
              )}
            </button>

            <button
              className="text-theme-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-pf-dark/95 backdrop-blur-lg border-t border-pf-purple/20">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === item.page
                    ? 'bg-gradient-primary text-white font-semibold'
                    : 'text-pf-text-secondary hover:text-pf-pink hover:bg-pf-purple/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
