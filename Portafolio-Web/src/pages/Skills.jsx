import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        description:
          "Lenguaje de marcado estándar para la creación de páginas web.",
        icon: <FaIcons.FaHtml5 className="w-8 h-8 text-orange-500" />,
        level: 90,
        color: "from-orange-500 to-orange-600",
      },
      {
        name: "CSS3",
        description:
          "Lenguaje de hojas de estilo para el diseño y presentación de páginas web.",
        icon: <FaIcons.FaCss3Alt className="w-8 h-8 text-blue-500" />,
        level: 85,
        color: "from-blue-500 to-blue-600",
      },
      {
        name: "JavaScript",
        description: "Lenguaje de programación para crear interactividad en páginas web.",
        icon: <FaIcons.FaJs className="w-8 h-8 text-yellow-400" />,
        level: 85,
        color: "from-yellow-400 to-yellow-500",
      },
      {
        name: "React",
        description: "Biblioteca JavaScript para construir interfaces de usuario interactivas.",
        icon: <FaIcons.FaReact className="w-8 h-8 text-blue-400" />,
        level: 80,
        color: "from-blue-400 to-blue-500",
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS utility-first para diseño rápido y responsive.",
        icon: <SiIcons.SiTailwindcss className="w-8 h-8 text-cyan-500" />,
        level: 85,
        color: "from-cyan-500 to-cyan-600",
      },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      {
        name: "Node.js",
        description: "Entorno de ejecución para JavaScript del lado del servidor.",
        icon: <FaIcons.FaNodeJs className="w-8 h-8 text-green-500" />,
        level: 75,
        color: "from-green-500 to-green-600",
      },
      {
        name: "Express.js",
        description: "Framework web para Node.js para crear APIs y aplicaciones web.",
        icon: <SiIcons.SiExpress className="w-8 h-8 text-gray-800 dark:text-white" />,
        level: 70,
        color: "from-gray-700 to-gray-800",
      },
      {
        name: "MongoDB",
        description: "Base de datos NoSQL para aplicaciones modernas.",
        icon: <SiIcons.SiMongodb className="w-8 h-8 text-green-500" />,
        level: 65,
        color: "from-green-500 to-green-600",
      },
    ],
  },
  {
    name: "Herramientas y Otros",
    skills: [
      {
        name: "Git",
        description: "Sistema de control de versiones distribuido.",
        icon: <FaIcons.FaGitAlt className="w-8 h-8 text-orange-600" />,
        level: 80,
        color: "from-orange-600 to-orange-700",
      },
      {
        name: "GitHub",
        description: "Plataforma de desarrollo colaborativo y control de versiones.",
        icon: <FaIcons.FaGithub className="w-8 h-8 text-gray-800 dark:text-white" />,
        level: 85,
        color: "from-gray-700 to-gray-800",
      },
      {
        name: "VS Code",
        description: "Editor de código fuente ligero y potente.",
        icon: <DiIcons.DiVisualstudio className="w-8 h-8 text-blue-500" />,
        level: 90,
        color: "from-blue-500 to-blue-600",
      },
    ],
  },
];

const SkillItem = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4 space-x-4">
        <div className="p-3 rounded-lg bg-gradient-to-br bg-opacity-10">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h4>
          <div className="relative mt-2 h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <motion.div
              className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${skill.level}%` : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <span className="absolute right-2 top-[-22px] text-xs font-semibold text-gray-700 dark:text-gray-300 select-none">
              {skill.level}%
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-4">{skill.description}</p>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades y Tecnologías
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear soluciones web modernas y eficientes.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-16"
              variants={categoryVariants}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                {category.name}
              </h3>

              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem key={skillIndex} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
