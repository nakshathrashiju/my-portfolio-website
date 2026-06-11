import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/user.jpeg';

function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-image">
            <div className="image-placeholder">
              <img
  src={profilePic}
  alt="Nakshathra Shiju"
  className="about-image"
/>
            </div>
          </div>
          <div className="about-text">
            <p>
              I'm Nakshathra Shiju, a Computer Science student at SCMS School of Engineering and Technology, Karukutty, under APJ Abdul Kalam Technological University (KTU). Passionate about software development and emerging technologies, I enjoy learning new skills, solving problems, and building user-focused solutions.
</p>
            
            <p>
Through academics, internships, and hands-on experiences, I have developed strong technical and collaborative skills while continuously exploring opportunities to grow as a future software engineer.

            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Nakshathra Shiju</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">sample_nakshathra@email.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Ernakulam, Kerala, India</span>
              </div>
              <div className="info-item">
                <span className="info-label">Available</span>
                <span className="info-value">Part Time</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;