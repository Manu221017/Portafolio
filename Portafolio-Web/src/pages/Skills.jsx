import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import SkillBar from "../components/SkillBar";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 75 }
];

const Skills = () => {
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
    <section id="skills" className="py-20 px-6 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 reveal">Habilidades</h2>
      <div className="max-w-xl mx-auto space-y-4">
        {skills.map((skill, idx) => (
          <SkillBar key={idx} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
