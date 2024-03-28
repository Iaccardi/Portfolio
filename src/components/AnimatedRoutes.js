import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import { Banner } from './Banner';
import { AboutMe } from './About';
import { Skills } from './Skills';
import {Projects} from './Projects';
import {AnimatePresence} from "framer-motion";
import {Contact} from './Contact';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location = {location} key={location.pathname}>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes