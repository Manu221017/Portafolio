import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import PDFDownloader from '../components/PDFDownloader';

const Resume = () => {
  const [pdfError, setPdfError] = useState(false);

  const education = [
    {
      degree: "Licenciatura en Ingeniería en Ciencias de la Computación",
      institution: "Universidad del Valle de Guatemala",
      period: "2021 - Presente",
      description: "Cursando tercer año de la carrera con enfoque en desarrollo de software y sistemas.",
      courses: [
        "Estructuras de Datos",
        "Algoritmos y Programación",
        "Bases de Datos",
        "Desarrollo Web",
        "Sistemas Operativos"
      ]
    }
  ];

  const certifications = [
    {
      name: "Desarrollo Web Full Stack",
      issuer: "Academia de Código",
      date: "2023",
      description: "Programa intensivo de desarrollo web con React, Node.js y bases de datos.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git & GitHub"
      ]
    }
  ];

  const projects = [
    {
      name: "E-commerce App",
      description: "Aplicación web de comercio electrónico con funcionalidades completas de carrito de compras, autenticación de usuarios y gestión de productos.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
      features: [
        "Autenticación de usuarios",
        "Carrito de compras",
        "Gestión de productos",
        "Diseño responsive"
      ]
    },
    {
      name: "Pokemon API Explorer",
      description: "Aplicación web interactiva que consume la API de Pokemon para mostrar información detallada de los pokémon.",
      technologies: ["JavaScript", "HTML", "CSS", "Pokemon API", "Fetch API"],
      features: [
        "Búsqueda en tiempo real",
        "Visualización de estadísticas",
        "Filtros avanzados",
        "Diseño responsive"
      ]
    },
    {
      name: "Reloj Digital con Hooks",
      description: "Reloj digital desarrollado con React Hooks, uso de useEffect y useState, incluye múltiples zonas horarias.",
      technologies: ["React", "Hooks", "JavaScript", "CSS Modules"],
      features: [
        "Múltiples zonas horarias",
        "Temas personalizables",
        "Alarmas y temporizadores",
        "Diseño minimalista"
      ]
    }
  ];

  const skills = {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 65 }
    ],
    tools: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Currículum Vitae
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria académica y profesional
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Información Personal */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaIcons.FaUser className="w-8 h-8 mr-3 text-accent" />
              Información Personal
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaIcons.FaUser className="w-6 h-6 text-accent" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Manuel Ulin</h4>
                  <p className="text-gray-600 dark:text-gray-300">Desarrollador Full Stack</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaIcons.FaEnvelope className="w-6 h-6 text-accent" />
                <p className="text-gray-600 dark:text-gray-300">manuel.ulin@email.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaIcons.FaMapMarkerAlt className="w-6 h-6 text-accent" />
                <p className="text-gray-600 dark:text-gray-300">Ciudad de Guatemala, Guatemala</p>
              </div>
            </div>
          </motion.div>

          {/* Educación */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaIcons.FaGraduationCap className="w-8 h-8 mr-3 text-accent" />
              Educación
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-accent font-medium mt-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {edu.period}
                  </p>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Cursos Relevantes:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Habilidades */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaIcons.FaCode className="w-8 h-8 mr-3 text-accent" />
              Habilidades Técnicas
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frontend</h4>
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="h-2 bg-accent rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Backend</h4>
                <div className="space-y-4">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="h-2 bg-accent rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Herramientas</h4>
                <div className="space-y-4">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="h-2 bg-accent rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Proyectos */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaIcons.FaProjectDiagram className="w-8 h-8 mr-3 text-accent" />
              Proyectos Destacados
            </h3>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Tecnologías:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Características:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificaciones */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaIcons.FaCertificate className="w-8 h-8 mr-3 text-accent" />
              Certificaciones
            </h3>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-lg text-accent font-medium mt-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {cert.date}
                  </p>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {cert.description}
                  </p>
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Habilidades Adquiridas:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Descargar CV */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaIcons.FaFileDownload className="w-8 h-8 mr-3 text-accent" />
              Descargar CV
            </h3>
            <div className="flex justify-center">
              <PDFDownloader />
            </div>
          </motion.div>

          {/* Visor de PDF */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaIcons.FaFilePdf className="w-8 h-8 mr-3 text-accent" />
              Vista Previa del CV
            </h3>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: '141.4%' }}> {/* Aspect ratio 1:√2 (A4) */}
              {pdfError ? (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <div className="text-center p-6">
                    <FaIcons.FaExclamationTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">
                      No se pudo cargar el PDF. Por favor, intenta descargarlo directamente.
                    </p>
                  </div>
                </div>
              ) : (
                <iframe
                  src="/CV_MANUEL.pdf"
                  className="absolute top-0 left-0 w-full h-full"
                  title="CV Manuel Ulin"
                  onError={() => setPdfError(true)}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
