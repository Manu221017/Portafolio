import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import ManuelImage from '../assets/Manuel.jpeg';

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 reveal">
        <div className="flex flex-col items-center text-center mb-8">
          <svg className="w-6 h-6 text-accent mb-6" fill="none" stroke="currentColor" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" strokeWidth="2" />
            <path d="M10 20 Q16 10 22 20" strokeWidth="2" />
          </svg>
          
          <div className="relative w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold text-primary-900 dark:text-white mb-6">
                Manuel Ulin
              </h1>
              <img 
                src={ManuelImage} 
                alt="Manuel Ulin" 
                className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
              />
              <p className="text-2xl md:text-3xl text-primary-600 dark:text-primary-300 mb-8">
                Estudiante de Ingeniería en Ciencias de la Computación
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 mb-8">
          <p className="text-xl text-primary-600 dark:text-primary-400 leading-relaxed text-center">
            Soy un estudiante de tercer año de la Universidad del Valle de Guatemala, <br/>
            cursando una Licenciatura en Ingeniería en Ciencias de la Computación. <br/>
            Me apasiona el desarrollo web y la creación de soluciones tecnológicas innovadoras. <br/>
            A través de mi formación académica, he desarrollado habilidades en programación,<br />
            desarrollo web y bases de datos, trabajando con tecnologías modernas como React, <br />
            JavaScript, HTML, CSS y Node.js.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 text-lg bg-accent text-white rounded-full shadow-md hover:bg-accent-dark hover:scale-105 transition-all duration-300 font-semibold inline-block underline-offset-4 hover:underline"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 text-lg border-2 border-accent text-accent rounded-full shadow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 font-semibold inline-block underline-offset-4 hover:underline"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
