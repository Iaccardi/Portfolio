import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import customCareerDashboardBackground from '../images/Careerhub.png';

export function Projects() {
  const projects = [
    { title: 'Custom Career Dashboard', description: 'Custom Career Dashboard CRM', backgroundImage: customCareerDashboardBackground, techStack: 'Tech Stack: React | MaterialUI | MYSQL | Express' },
    { title: 'Restaurant App', description: 'Project Content Card' },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <motion.div 
      className='project-container' 
      id='projects'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h1 className='project-header h1'>Projects</h1>

      
      <div className='project'>
        <h3 className='h3-project'>{projects[currentProjectIndex].title}</h3>
        <img className='project-image' src={projects[currentProjectIndex].backgroundImage} alt='project-background' width='100%' />
        <div className='project-info'>
          <h3 style={{ color: "#FF4D5A" }}>{projects[currentProjectIndex].description}</h3>
          <p>{projects[currentProjectIndex].techStack}</p>
          <p className='project-description' style={{ fontSize: '1rem' }}>This project is essentially a CRM web app for users who are looking for 
              career opportunities. Features include a custom dashboard, profile creation, job searching, and 
              a contact database.
          </p>
      </div>
        

       
      </div>
      <div className='carousel-controls '>
          <button className="btn btn-custom mt-4 btn-md banner-button" onClick={prevProject}>Previous</button>
          <button className="btn btn-custom mt-4 btn-md banner-button" onClick={nextProject}>Next</button>
        </div>
    </motion.div>
  );
}

export default Projects;
