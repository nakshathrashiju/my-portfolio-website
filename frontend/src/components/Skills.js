import React from 'react';
import { motion } from 'framer-motion';

const skills = [
'C++',
'Java',
'Python',
'Object-Oriented Programming',
'Data Structures & Algorithms',
'MySQL',
'MongoDB',
'Database Management Systems',
'HTML',
'CSS',
'JavaScript',
'React.js',
'UI/UX Design',
'Figma',
'Artificial Intelligence',
'Machine Learning',
'Problem Solving',
'Git & GitHub',
'Team Collaboration',
'Communication',
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
         {skills.map((skill, index) => (
  <motion.div
    key={index}
    className="skill-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    {skill}
  </motion.div>
))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;