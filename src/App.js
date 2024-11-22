import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home'); // Track current section

  // Use IntersectionObserver to detect the current section
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.5, // 50% of the section needs to be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
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

        <div className="scroll-arrow" onClick={() => scrollToSection(currentSection === 'contact' ? 'home' : 'contact')}>
        {currentSection === 'contact' ? '↑' : '↓'}
      </div>
    </Router>
  );
}

export default App;