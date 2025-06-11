import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const Footer = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const isDarkMode = document.documentElement.classList.contains('dark');

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FaIcons.FaGithub className="w-6 h-6" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FaIcons.FaLinkedin className="w-6 h-6" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <FaIcons.FaTwitter className="w-6 h-6" />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: <FaIcons.FaInstagram className="w-6 h-6" />
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Manuel Ulin
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Desarrollador Full Stack apasionado por crear soluciones web innovadoras y eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200">
                  CV
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Contacto
            </h3>
            <div className="space-y-2">
              <a 
                href="mailto:your.email@example.com"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200"
              >
                <FaIcons.FaEnvelope className="w-5 h-5 mr-2" />
                your.email@example.com
              </a>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <FaIcons.FaMapMarkerAlt className="w-5 h-5 mr-2" />
                Ciudad de Guatemala, Guatemala
              </p>
            </div>
          </div>
        </div>

        {/* Social Links and Dark Mode Toggle */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <FaIcons.FaSun className="w-6 h-6" />
                ) : (
                  <FaIcons.FaMoon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} Manuel Ulin. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 