import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

  return (
    <Router>
      <Navbar className="navbar-custom" expand="lg" fixed="top">
      <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ width: '100%', justifyContent: 'space-evenly' }}>
              <Nav.Link onClick={() => scrollToSection('home')}>home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('projects')}>projects</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('contact')}>contact</Nav.Link>
            </Nav>
       </Navbar.Collapse>
       </Container>
      </Navbar>
        <section id="home"><Home /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
    </Router>
  );
}

export default App;