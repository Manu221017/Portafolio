import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from 'scrollreveal';
import EcommerceCover from '../assets/Ecommerce.png';
import PokemonCover from '../assets/Pokemon.png';
import RelojCover from '../assets/Reloj.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "E-commerce App",
      description: "Aplicación de ejemplo de e-commerce",
      technologies: ["React", "Tailwind CSS"],
      link: "https://e-commerce-app-kp1e.vercel.app/",
      image: EcommerceCover,
      category: "web"
    },
    {
      title: "Ejercicio JS",
      description: "Proyecto de ejercicios en JavaScript",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "http://awita.site/usuarios/uli221017/Ejercicio_js/",
      image: PokemonCover,
      category: "web"
    },
    {
      title: "Proyecto Hooks",
      description: "Aplicación de ejemplo utilizando React Hooks",
      technologies: ["React", "Hooks", "JavaScript"],
      link: "http://awita.site/usuarios/uli221017/Hooks/",
      image: RelojCover,
      category: "web"
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'desktop', label: 'Desktop' }
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

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="py-3 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-2 reveal">
        <h2 className="text-xl font-bold text-primary-900 dark:text-white mb-1">
          Mis Proyectos
        </h2>
        <p className="text-primary-600 dark:text-primary-400 max-w-2xl mx-auto text-sm">
          Una colección de mis trabajos más destacados y proyectos personales
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-1 mb-3 reveal">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            className={`px-2.5 py-1 rounded-full shadow-md font-semibold transition-all duration-300 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
              ${filter === id ? 'bg-accent text-white hover:bg-accent-dark' : 'bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700 hover:text-accent'}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <ProjectCard {...project} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-3">
            <p className="text-primary-600 dark:text-primary-400 text-lg">
              No hay proyectos disponibles en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
