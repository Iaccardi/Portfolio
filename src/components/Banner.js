import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {motion} from 'framer-motion';

export const Banner = () => {
  return (
    <motion.section
     className="banner-container"
      id="home"
      initial= {{opacity:0}}
      animate = {{opacity:1}}
      exit = {{opacity:0}}
      transition={{ duration: 2 }}
      
      >
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="text-center" xs={12} md={8} xl={8}>
            <span className="tagline"></span>
            <h5 className="h5 pb-4">{"Hi, my name is Ignazio"}</h5>
            <h1 className="display-4 pb-2 fw-bold banner-h1">{"Full Stack"}</h1>
            <h1 className="display-4 pb-2 fw-bold banner-h1">{"Web Developer"}</h1>
            <h5 className="h5 pt-4">{"I'm a passionate developer looking for an opportunity to join an amazing company!"}</h5>
            <div className='button-container'>
              <a href="/contact" className="btn btn-custom mt-4 btn-lg banner-button">Let's Connect!</a>
              <a href="/projects" className="btn btn-custom mt-4 btn-lg banner-button">View Projects</a>
            </div>

          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};
