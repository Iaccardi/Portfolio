// Skills.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";
import "../App.css"
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faBootstrap,
  faJava,
  faWordpress,
  faGithub,
  faNode,
  faLinux,
  faPython,
  faDashcube
} from "@fortawesome/free-brands-svg-icons";

export const Skills = () => {
    
  return (
    <motion.div 
    className=" skills-container container-lg testing mt-5" 
    id= 'skills'
    initial= {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:0}}
    transition={{ duration: 2 }}
    
    >
      <h1 className="h1 pb-5 text-center skills-heading pt-4">Skills</h1>

      <div className="row align-items-center">
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
            <FontAwesomeIcon icon={faHtml5} size="5x" style={{ color: "#E44D26" }} />
          </div>
          <div className="h4">HTML</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
            <FontAwesomeIcon icon={faCss3} size="5x" style={{ color: "#1572B6" }} />
          </div>
          <div className="h4">CSS</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
            <FontAwesomeIcon icon={faJs} size="5x" style={{ color: "#F7DF1E" }} />
          </div>
          <div className="h4">JavaScript</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
            <FontAwesomeIcon icon={faReact} size="5x" style={{ color: "#61DAFB" }} />
          </div>
          <div className="h4">React</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
            <FontAwesomeIcon icon={faBootstrap} size="5x" style={{ color: "#563D7C" }} />
          </div>
          <div className="h4">Bootstrap</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
            <FontAwesomeIcon icon={faJava} size="5x" style={{ color: "#007396" }} />
          </div>
          <div className="h4">Java</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
            <FontAwesomeIcon icon={faWordpress} size="5x" style={{ color: "#21759B" }} />
          </div>
          <div className="h4">WordPress</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
            <FontAwesomeIcon icon={faGithub} size="5x" style={{ color: "white" }} />
          </div>
          <div className="h4">GitHub</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
          <FontAwesomeIcon icon={faNode} size="5x" style={{color: "#0f8f29",}} />   
          </div>       
          <div className="h4">Node JS</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
          <FontAwesomeIcon icon={faLinux} size="5x" style={{color: "white",}} />   
          </div>       
          <div className="h4">Linux</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
          <FontAwesomeIcon icon={faPython} size="5x" style={{color: "#F7DF1E",}} />   
          </div>       
          <div className="h4">Python</div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center icons-container mb-4 my-custom-border-box">
          <div>
          <FontAwesomeIcon icon={faDashcube} size="5x" style={{color: "#1572B6",}} />   
          </div>       
          <div className="h4">MYSQL</div>
        </div>



      </div>
    </motion.div>
  );
};
