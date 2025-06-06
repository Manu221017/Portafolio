import React from 'react';

const Resume = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia y Educación
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria profesional y formación académica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experiencia Laboral */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experiencia Laboral
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Actualmente estoy en búsqueda de mi primera experiencia laboral en el campo del desarrollo web. 
                  Durante mi formación, he desarrollado varios proyectos que demuestran mis habilidades y conocimientos 
                  en tecnologías modernas como React, Node.js, y bases de datos.
                </p>
              </div>
            </div>
          </div>

          {/* Educación */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
              Educación
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Ingeniería en Ciencias de la computación y tecnologías de la información
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Universidad del Valle de Guatemala
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  2020 - Presente
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Durante mi formación académica, he desarrollado habilidades en programación, 
                  desarrollo web y bases de datos. He trabajado con tecnologías como React, 
                  HTML, CSS, JavaScript, Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de Descarga */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
