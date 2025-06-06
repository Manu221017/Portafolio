import React from 'react';

const Footer = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-12 text-gray-600 dark:text-gray-300">
        {/* GitHub Link */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          GitHub
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          LinkedIn
        </a>

        {/* Email Link */}
        <a
          href="mailto:your.email@example.com"
          className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          Email
        </a>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ml-6"
        >
          {isDarkMode ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer; 