import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import { NavigationState } from './types';
import { initAnimateOnScroll } from './utils/initAnimateOnScroll';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [navState, setNavState] = useState<NavigationState>({
    currentPage: 'home',
  });

  useEffect(() => {
    document.title = 'Pixel Flame - Ignite Your Digital Presence';
  }, []);

  useEffect(() => {
    const cleanup = initAnimateOnScroll();
    return cleanup;
  }, [navState.currentPage]);

  const handleNavigate = (newState: NavigationState) => {
    setNavState(newState);
  };

  const renderPage = () => {
    switch (navState.currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects onNavigate={handleNavigate} />;
      case 'project-detail':
        return navState.projectSlug ? (
          <ProjectDetail slug={navState.projectSlug} onNavigate={handleNavigate} />
        ) : (
          <Projects onNavigate={handleNavigate} />
        );
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'blog-detail':
        return navState.blogSlug ? (
          <BlogDetail slug={navState.blogSlug} onNavigate={handleNavigate} />
        ) : (
          <Blog onNavigate={handleNavigate} />
        );
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-theme-primary transition-colors duration-300">
        <Navbar currentPage={navState.currentPage} onNavigate={handleNavigate} />
        <main>{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </ThemeProvider>
  );
}

export default App;
