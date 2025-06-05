import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";

function App() {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom > 0;
        
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check

    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-primary-900 text-primary-900 dark:text-primary-50">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section 
            id="home" 
            className="py-16 pt-56 animate-fade-in"
          >
            <Home />
          </section>
          <section 
            id="projects" 
            className="min-h-screen py-16"
          >
            <Projects />
          </section>
          <section 
            id="skills" 
            className="min-h-screen py-16"
          >
            <Skills />
          </section>
          <section 
            id="resume" 
            className="min-h-screen py-16"
          >
            <Resume />
          </section>
        </div>
      </main>
      <footer className="border-t border-primary-200 dark:border-primary-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-600 dark:text-primary-400">
          <p className="hover:text-accent transition-colors duration-300">
            © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

