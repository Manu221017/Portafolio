import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Resume = () => {
  const experiences = [
    {
      title: "Desarrollador Web Full Stack",
      company: "Empresa Actual",
      period: "2022 - Presente",
      description: "Desarrollo de aplicaciones web modernas utilizando Html, Css, JavaScript, React, Node.js. Implementación de nuevas características y optimización de rendimiento.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Desarrollador Frontend",
      company: "Empresa Anterior",
      period: "2020 - 2022",
      description: "Desarrollo de interfaces de usuario responsivas y accesibles. Colaboración con el equipo de diseño para implementar nuevas características.",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    }
  ];

  const education = [
    {
      degree: "Ingeniería en Sistemas",
      school: "Universidad  Del valle de Guatemala",
      period: "2022- 2025",
      description: "Especialización en desarrollo web "
    }
  ];

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
    <div className="py-16">
      <div className="text-center mb-12 reveal">
        <h2 className="text-3xl font-bold text-primary-900 dark:text-white mb-4">
          Mi Experiencia
        </h2>
        <p className="text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
          Un resumen de mi trayectoria profesional y formación académica
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12 reveal">
          <h3 className="text-2xl font-semibold text-primary-900 dark:text-white mb-6 flex items-center">
            <span className="text-accent mr-2">💼</span>
            Experiencia Laboral
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 reveal">
          <h3 className="text-2xl font-semibold text-primary-900 dark:text-white mb-6 flex items-center">
            <span className="text-accent mr-2">🎓</span>
            Educación
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-accent">{edu.school}</p>
                  </div>
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {edu.period}
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center reveal">
          <a 
            href="/cv.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full shadow-md hover:bg-accent-dark hover:scale-105 transition-all duration-300 font-semibold underline-offset-4 hover:underline"
          >
            Descargar CV
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
