export default function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
              Portfolio
            </a>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#projects" className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Proyectos
            </a>
            <a href="#skills" className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Habilidades
            </a>
            <a href="#resume" className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 