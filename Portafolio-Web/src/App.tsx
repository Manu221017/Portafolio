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
      // Target the specific section elements
      const sections = document.querySelectorAll('#projects, #skills, #resume');

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if the section is visible in the viewport
        if (sectionTop < windowHeight * 0.8 && sectionBottom > windowHeight * 0.2) { // Adjust threshold as needed
          section.classList.add('animate-fade-in');
          section.classList.remove('opacity-0', 'transform', 'translate-y-10'); // Remove initial hidden classes
        }
        // Optionally, you can add logic here to hide elements again if they scroll out of view
        // else {
        //   element.classList.remove('animate-fade-in');
        //   element.classList.add('opacity-0');
        // }
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);

    // Run the check once on mount to animate elements already in view
    handleScrollAnimation();

    // Clean up the event listener on component unmount
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
            className="min-h-screen py-16 mt-20 bg-white dark:bg-primary-900 opacity-0 transform translate-y-10"
          >
            <Projects />
          </section>
          <section 
            id="skills" 
            className="min-h-screen py-16 mt-20 bg-gray-100 dark:bg-primary-800 opacity-0 transform translate-y-10"
          >
            <Skills />
          </section>
          <section 
            id="resume" 
            className="min-h-screen py-16 mt-20 bg-white dark:bg-primary-900 opacity-0 transform translate-y-10"
          >
            <Resume />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

