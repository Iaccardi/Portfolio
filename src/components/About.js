import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

export const AboutMe = () => {
  return (
    <motion.section 
      id="about" 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-md-6">
            <h1 className="about-header">About Me</h1>
            <p className="about-paragraph">
              I'm a B.S Computer Science graduate from Western Governor's University and I also have a BA in Sociology
              from CUNY Queens College. I've always had a passion for computers ever since the days of dial-up internet. In my free time, 
              I enjoy playing handball and pickleball and hanging out with my Norwegian Elkhound. I've been learning web development for a few
              years now and would like to continue to develop my skills and experience as a developer. If you have a project that you need help with
              or are looking to hire a full stack developer for you company, please feel free to reach out to me!
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};


