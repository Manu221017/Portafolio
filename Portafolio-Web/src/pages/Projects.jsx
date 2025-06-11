import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import EcommerceCover from '../assets/Ecommerce.png';
import PokemonCover from '../assets/Pokemon.png';
import RelojCover from '../assets/Reloj.png';
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "E-commerce App",
      description:
        "Aplicación web de comercio electrónico con funcionalidades completas de carrito de compras, autenticación de usuarios y gestión de productos.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
      link: "https://e-commerce-app-kp1e.vercel.app/",
      github: "https://github.com/yourusername/e-commerce-app",
      image: EcommerceCover,
      category: "web",
      features: [
        "Autenticación de usuarios",
        "Carrito de compras",
        "Gestión de productos",
        "Diseño responsive",
      ],
      longDescription: "Desarrollo de una plataforma de comercio electrónico completa con sistema de autenticación, gestión de productos, carrito de compras y panel de administración. Implementación de pagos seguros y sistema de notificaciones en tiempo real."
    },
    {
      title: "Pokemon API Explorer",
      description:
        "Aplicación web interactiva que consume la API de Pokemon para mostrar información detallada de los pokémon.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Pokemon API",
        "Fetch API",
      ],
      link: "http://awita.site/usuarios/uli221017/Ejercicio_js/",
      github: "https://github.com/yourusername/pokemon-explorer",
      image: PokemonCover,
      category: "web",
      features: [
        "Búsqueda en tiempo real",
        "Visualización de estadísticas",
        "Filtros avanzados",
        "Diseño responsive",
      ],
      longDescription: "Explorador interactivo de la API de Pokemon que permite a los usuarios buscar, filtrar y visualizar información detallada de los pokémon. Incluye características como búsqueda en tiempo real, visualización de estadísticas y diseño responsive."
    },
    {
      title: "Reloj Digital con Hooks",
      description:
        "Reloj digital desarrollado con React Hooks, uso de useEffect y useState, incluye múltiples zonas horarias.",
      technologies: ["React", "Hooks", "JavaScript", "CSS Modules"],
      link: "http://awita.site/usuarios/uli221017/Hooks/",
      github: "https://github.com/yourusername/digital-clock",
      image: RelojCover,
      category: "web",
      features: [
        "Múltiples zonas horarias",
        "Temas personalizables",
        "Alarmas y temporizadores",
        "Diseño minimalista",
      ],
      longDescription: "Aplicación de reloj digital desarrollada con React Hooks que muestra múltiples zonas horarias, permite personalizar temas y configurar alarmas. Implementa conceptos avanzados de React como useEffect y useState."
    },
  ];

  const categories = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "desktop", label: "Desktop" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">
            Mis Proyectos
          </h2>
          <p className="text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            Una colección de mis trabajos más destacados y proyectos personales que
            demuestran mis habilidades y experiencia en desarrollo web.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(({ id, label }) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(id)}
              className={`px-6 py-2 rounded-full shadow-md font-semibold transition-all duration-300
                ${
                  filter === id
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700"
                }`}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollLeft}
            aria-label="Scroll Left"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary-800 bg-opacity-50 rounded-full p-3 z-10 hover:bg-opacity-80 transition"
          >
            <FaArrowLeft className="text-white w-5 h-5" />
          </motion.button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 scrollbar-thin scroll-smooth px-12 py-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="snap-center flex-shrink-0 project-card-container"
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollRight}
            aria-label="Scroll Right"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary-800 bg-opacity-50 rounded-full p-3 z-10 hover:bg-opacity-80 transition"
          >
            <FaArrowRight className="text-white w-5 h-5" />
          </motion.button>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-6">
                    {selectedProject.longDescription}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-900 dark:text-white mb-3">
                      Características principales:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-primary-600 dark:text-primary-400">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-900 dark:text-white mb-3">
                      Tecnologías utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Ver Demo
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-600 transition-colors"
                    >
                      <FaGithub />
                      Ver Código
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
