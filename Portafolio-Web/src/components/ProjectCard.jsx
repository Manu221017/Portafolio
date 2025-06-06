import React from 'react';

const ProjectCard = ({ title, description, technologies, link, image }) => {
  return (
    <div className="group relative bg-white dark:bg-primary-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block relative h-20 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-primary-600 dark:text-primary-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-200 rounded-full"
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
            className="inline-block mt-4 px-5 py-2 bg-accent text-white rounded-full shadow-md hover:bg-accent-dark hover:scale-105 transition-all duration-300 font-semibold underline-offset-4 hover:underline"
          >
            Ver Proyecto
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
