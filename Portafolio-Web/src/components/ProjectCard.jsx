import React from 'react';
import * as FaIcons from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, link, github, image, features }) => {
  return (
    <div
      className="group relative bg-white dark:bg-primary-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700
      min-w-[320px] max-w-xs snap-center flex-shrink-0 flex flex-col"
      style={{ height: '460px' }}
    >
      {/* Imagen */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-primary-900 dark:text-white mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        <p className="text-xs text-primary-600 dark:text-primary-300 mb-3 line-clamp-4 flex-grow">
          {description}
        </p>

        {/* Características */}
        {features && (
          <div className="mb-3">
            <h4 className="text-xs font-semibold text-primary-900 dark:text-white mb-1">
              Características:
            </h4>
            <ul className="list-disc list-inside text-xs text-primary-600 dark:text-primary-300 space-y-0.5 max-h-16 overflow-hidden">
              {features.map((feature, index) => (
                <li key={index} className="line-clamp-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tecnologías */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-primary-900 dark:text-white mb-1">
            Tecnologías:
          </h4>
          <div className="flex flex-wrap gap-1.5 max-h-10 overflow-auto scrollbar-thin scrollbar-thumb-primary-400">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-[0.65rem] bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-200 rounded-full whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-3 mt-auto">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex justify-center items-center px-3 py-1 bg-accent text-white rounded-full shadow hover:bg-accent-dark hover:scale-105 transition-all duration-300 font-semibold text-xs"
            >
              <FaIcons.FaExternalLinkAlt className="w-4 h-4 mr-1" />
              Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex justify-center items-center px-3 py-1 bg-primary-600 text-white rounded-full shadow hover:bg-primary-700 hover:scale-105 transition-all duration-300 font-semibold text-xs"
            >
              <FaIcons.FaGithub className="w-4 h-4 mr-1" />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
