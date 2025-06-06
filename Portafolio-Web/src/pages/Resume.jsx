import React from 'react';

const Resume = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria profesional
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Experiencia Laboral */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experiencia Laboral
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
                <p className="text-xl text-gray-600 dark:text-gray-300 text-center">
                  Actualmente estoy en búsqueda de mi primera experiencia laboral en el campo del desarrollo web. 
                  Durante mi formación, he desarrollado varios proyectos que demuestran mis habilidades y conocimientos 
                  en tecnologías modernas como React, Node.js, y bases de datos.
                </p>
              </div>
            </div>
          </div>

          {/* Visor de PDF */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Mi CV
            </h3>
            <div className="relative w-full" style={{ paddingTop: '141.4%' }}> {/* Aspect ratio 1:√2 (A4) */}
              <iframe
                src="/assets/CV_MANUEL.pdf"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                title="CV Manuel Ulin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
