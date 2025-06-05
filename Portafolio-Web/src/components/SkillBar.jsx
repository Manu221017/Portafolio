import React, { useEffect, useRef, useState } from 'react';

const SkillBar = ({ name, level, icon }) => {
  const [visible, setVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-6 w-full max-w-xl" ref={barRef}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon && (
            <span className="w-6 h-6 text-accent flex items-center justify-center">
              {React.cloneElement(icon, { className: 'w-6 h-6' })}
            </span>
          )}
          <span className="text-base font-medium text-primary-900 dark:text-primary-100">{name}</span>
        </div>
        <span className="text-sm font-semibold text-primary-700 dark:text-primary-200">{level}%</span>
      </div>
      <div className="w-full bg-primary-100 dark:bg-primary-800 rounded-full h-4">
        <div
          className="h-4 rounded-full bg-accent transition-all duration-1000 ease-out shadow-md"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
