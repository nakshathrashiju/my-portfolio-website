import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Nakshathra Shiju
        </motion.h1>
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          B-Tech | CSE | Year 2
        </motion.h2>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I am exploring some domains in this semester break!
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link to="projects" smooth={true} duration={500} className="btn-primary">
            View My Work
          </Link>
          <Link to="contact" smooth={true} duration={500} className="btn-secondary">
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
      <div className="hero-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
}

export default Hero;