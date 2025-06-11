import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import ManuelImage from '../assets/Manuel.jpeg';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 reveal max-w-4xl w-full"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light rounded-full blur opacity-25 animate-pulse-slow"></div>
              <motion.img 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src={ManuelImage} 
                alt="Manuel Ulin" 
                className="relative w-full h-full rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light"
              >
                Manuel Ulin
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-xl text-primary-600 dark:text-primary-300 font-semibold">
                  Desarrollador Full Stack
                </p>
                <p className="text-lg text-primary-500 dark:text-primary-400">
                  Estudiante de Ingeniería en Ciencias de la Computación
                </p>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <a href="#home" className="px-4 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors">
              Inicio
            </a>
            <a href="#projects" className="px-4 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors">
              Proyectos
            </a>
            <a href="#skills" className="px-4 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors">
              Habilidades
            </a>
            <a href="#resume" className="px-4 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors">
              CV
            </a>
            <a href="#contact" className="px-4 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors">
              Contacto
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 mb-6"
          >
            <a href="mailto:your.email@example.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-accent transition-colors">
              <FaIcons.FaEnvelope className="w-5 h-5 mr-2" />
              your.email@example.com
            </a>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <FaIcons.FaMapMarkerAlt className="w-5 h-5 mr-2" />
              Ciudad de Guatemala, Guatemala
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6"
          >
            <p className="text-lg text-primary-600 dark:text-primary-400 leading-relaxed text-center">
              Desarrollador Full Stack apasionado por crear soluciones web innovadoras y eficientes.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 text-base bg-accent text-white rounded-lg shadow-lg hover:bg-accent-dark hover:scale-105 transition-all duration-300 font-semibold inline-flex items-center group"
            >
              <span>Ver Proyectos</span>
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7l6 5-6 5" />
              </svg>
            </a>

            <a 
              href="#resume" 
              className="px-6 py-3 text-base bg-primary-100 text-primary-700 dark:text-white rounded-lg shadow-lg hover:bg-primary-200 hover:scale-105 transition-all duration-300 font-semibold inline-flex items-center group"
            >
              <span>Ver CV</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>

            <a 
              href="#contact" 
              className="px-6 py-3 text-base border-2 border-accent text-accent rounded-lg shadow-lg hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 font-semibold inline-flex items-center group"
            >
              <span>Contactar</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
