import React from 'react';
import * as FaIcons from 'react-icons/fa';

const skills = [
  {
    name: "HTML",
    description: "Lenguaje de marcado estándar para la creación de páginas web.",
    icon: <FaIcons.FaHtml5 className="w-8 h-8 text-orange-500" />
  },
  {
    name: "CSS",
    description: "Lenguaje de hojas de estilo utilizado para describir la presentación de un documento escrito en HTML.",
    icon: <FaIcons.FaCss3Alt className="w-8 h-8 text-blue-500" />
  },
  {
    name: "JavaScript",
    description: "Lenguaje de programación que permite implementar funciones complejas en páginas web.",
    icon: <FaIcons.FaJs className="w-8 h-8 text-yellow-400" />
  },
  {
    name: "React",
    description: "Biblioteca de JavaScript para construir interfaces de usuario interactivas.",
    icon: <FaIcons.FaReact className="w-8 h-8 text-blue-400" />
  },
  {
    name: "Node.js",
    description: "Entorno de ejecución para JavaScript del lado del servidor.",
    icon: <FaIcons.FaNodeJs className="w-8 h-8 text-green-500" />
  }
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tecnologías y Herramientas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear soluciones web modernas y eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
