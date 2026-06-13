import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiShare2, FiX } from 'react-icons/fi';

const projects = [
  {
    title: 'Pharmacy Management System',
    description: 'A Java-based application for managing pharmacy operations, medicine records, inventory, and customer information.',
    tags: ['Java', 'OOP', 'Management System'],
    github: null
  },
  {
    title: 'Student Management System',
    description: 'A C++ application for managing student records and academic information.',
    tags: ['C++', 'Data Management', 'OOP'],
    github: 'https://github.com/nakshathrashiju/student-management-system'
  },
  {
    title: 'Bank Management System',
    description: 'A C++ console-based banking application with account management and file handling.',
    tags: ['C++', 'File Handling', 'OOP'],
    github: 'https://github.com/nakshathrashiju/bank-management-applications'
  },
  {
    title: 'Library Management System',
    description: 'A system for managing books, members, and library transactions.',
    tags: ['C++', 'Library System', 'OOP'],
    github: 'https://github.com/nakshathrashiju/library-management-system'
  },
  {
    title: 'Contact Book Management System',
    description: 'A contact management application built using Python and MongoDB.',
    tags: ['Python', 'MongoDB', 'Database'],
    github: null
  },
  {
    title: 'StudySync',
    description: 'An interactive study management system prototype designed using Figma.',
    tags: ['Figma', 'UI/UX', 'Prototype'],
    github: null
  },
  {
    title: 'BalanceBite',
    description: 'A smart diet tracking plate prototype developed for an entrepreneurship project.',
    tags: ['Innovation', 'Prototype', 'HealthTech'],
    github: null
  },
  {
    title: 'Mini Games',
    description: 'A classic console-based Tic Tac Toe and Snake Game developed in C++.',
    tags: ['C++', 'Game Development'],
    github: 'https://github.com/nakshathrashiju/mini-game-project'
  },
  {
    title: 'Personal Portfolio Websites',
    description: 'A modern full-stack portfolio website built to showcase my projects, skills, and achievements. Features responsive design, smooth animations, project sharing functionality, a contact form integrated with MongoDB, and deployment using Netlify and Render.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Full Stack', 'Portfolio'],
    github: 'https://github.com/nakshathrashiju/my-portfolio-website'
  }
];

function ShareModal({ project, onClose }) {
  const [copied, setCopied] = React.useState(false);

  const text = `🚀 ${project.title}\n\n${project.description}\n\nTech Stack: ${project.tags.join(', ')}`;

  const shareData = {
    text,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text)}`,
    gmail: `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent(project.title)}&body=${encodeURIComponent(text)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareData.text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  return ReactDOM.createPortal(
    <div className="share-overlay" onClick={onClose}>
      <div className="share-modal" onClick={(e) => e.stopPropagation()}>

        <div className="share-header">
          <h3>Share Project</h3>
          <FiX onClick={onClose} style={{ cursor: 'pointer' }} />
        </div>

        <p className="share-title">{project.title}</p>

        <div className="share-options">
          <a href={shareData.whatsapp} target="_blank" rel="noopener noreferrer">
            🟢 WhatsApp
          </a>
          <a href={shareData.gmail} target="_blank" rel="noopener noreferrer">
            📧 Gmail
          </a>
          <a href={shareData.linkedin} target="_blank" rel="noopener noreferrer">
            🔵 LinkedIn
          </a>
          <button onClick={handleCopy}>
            🔗 Copy Link
          </button>
        </div>

        {copied && (
          <div className="copy-toast">
            Copied to clipboard ✔
          </div>
        )}

      </div>
    </div>,
    document.body
  );
}

function Projects() {
  const [shareProject, setShareProject] = React.useState(null);

  return (
    <motion.div
      className="projects-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ y: -10 }}
          >
            <div className="project-top">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                )}
                <span onClick={() => setShareProject(project)} style={{ cursor: 'pointer' }}>
                  <FiShare2 />
                </span>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {shareProject && (
        <ShareModal
          project={shareProject}
          onClose={() => setShareProject(null)}
        />
      )}

    </motion.div>
  );
}

export default Projects;