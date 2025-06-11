import { useEffect } from 'react';
// @ts-ignore
import Home from './pages/Home';
// @ts-ignore
import Projects from './pages/Projects';
// @ts-ignore
import Skills from './pages/Skills';
// @ts-ignore
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
// @ts-ignore
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.add('active');
          section.classList.add('animate-fade-in');
          section.classList.remove('opacity-0', 'transform', 'translate-y-10');
        } else {
          document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-primary-900 dark:to-primary-800 text-primary-900 dark:text-primary-50">
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center py-16 pt-24 md:pt-32 animate-fade-in"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Home />
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          className="py-16 md:py-24 bg-white dark:bg-primary-900 opacity-0 transform translate-y-10"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Projects />
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills" 
          className="py-16 md:py-24 bg-gray-50 dark:bg-primary-800 opacity-0 transform translate-y-10"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skills />
          </div>
        </section>

        {/* Resume Section */}
        <section 
          id="resume" 
          className="py-16 md:py-24 bg-white dark:bg-primary-900 opacity-0 transform translate-y-10"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Resume />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

