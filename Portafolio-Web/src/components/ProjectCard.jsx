import React from 'react';

const ProjectCard = ({ title, description, technologies, link, image }) => {
  return (
    <div className="group relative bg-white dark:bg-primary-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block relative h-20 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
      
      <div className="p-3">
        <h3 className="text-sm font-bold text-primary-900 dark:text-white mb-1 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-primary-600 dark:text-primary-300 mb-2 text-xs">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-0.5 text-xs bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 px-2 py-0.5 bg-accent text-white rounded-full shadow-md hover:bg-accent-dark hover:scale-105 transition-all duration-300 font-semibold text-xs underline-offset-4 hover:underline"
          >
            Ver Proyecto
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
