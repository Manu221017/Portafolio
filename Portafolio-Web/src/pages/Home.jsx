import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '40px',
      duration: 900,
      easing: 'ease',
      origin: 'bottom',
      interval: 100,
      reset: false
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
      <svg className="w-6 h-6 text-accent mb-6" fill="none" stroke="currentColor" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" strokeWidth="2" />
        <path d="M10 20 Q16 10 22 20" strokeWidth="2" />
      </svg>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 dark:text-white mb-6">
              <span className="text-accent">@</span>TuNombre
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 mb-8">
              Desarrollador Web Full Stack
            </p>
          </div>
        </div>

        <p className="text-lg text-primary-600 dark:text-primary-400 leading-relaxed">
          Creo experiencias web modernas y optimizadas, enfocándome en la accesibilidad, 
          rendimiento y diseño intuitivo. Me especializo en desarrollo full-stack.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-accent text-white rounded-full shadow-md hover:bg-accent-dark hover:scale-105 transition-all duration-300 font-semibold inline-block underline-offset-4 hover:underline"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border-2 border-accent text-accent rounded-full shadow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 font-semibold inline-block underline-offset-4 hover:underline"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
