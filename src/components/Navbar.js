import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useLocation } from 'react-router-dom';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

export const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeLink = location.pathname.substring(1) || 'home';

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    backgroundColor: "#1A1A1A",
    
  };

  const brandStyle = {
    marginRight: "auto", // Always place brand on the left
  };

  const linkStyle = {
    marginLeft: isDesktop ? "auto" : 0, // On desktop, place the link on the right, otherwise, use the default alignment
  };

  return (
    <Navbar
      style={{ ...navbarStyle }}
      className={`navbar navbar-light navbar-expand-lg ${scrolled ? "scrolled" : ""}`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/" style={brandStyle}>
          Ignazio Accardi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }`}
                href="/"
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }`}
                href="/about"
              >
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }`}
                href="/skills"
              >
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "projects" ? "active navbar-link" : "navbar-link"
                }`}
                href="/projects"
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={linkStyle}>
              <Nav.Link
                className={`nav-link ${
                  activeLink === "contact" ? "active navbar-link" : "navbar-link"
                }`}
                href="contact" 
              >
                Contact Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={linkStyle}>
            <Nav.Link
              className={`nav-link github-icon${
                activeLink === "github" ? "active navbar-link" : "navbar-link"
              }`}
              href="https://github.com/iaccardi" 
              target="_blank" 
              rel="noopener noreferrer" 
              style= {{color:"white"}}
            >
              <FontAwesomeIcon icon={faGithub} size='1x' style={{color: "white" , marginRight:"5px"}}/>
              Github
            </Nav.Link>
          </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
