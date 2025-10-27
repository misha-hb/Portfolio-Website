import React from 'react';
import '../styles/Home.css';
import profileImg from '../images/profile-img.jpeg'; 
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import email from '../images/mail.png';
import resume from '../images/resume.png';
import { trackEvent } from '../analytics';

const Home = () => {
    return (
        <div className="home-container">
          <div className="left-column">
            <img src={profileImg} alt="Profile" className="profile-image" />
            <div className="icon-links">
              <a 
                href="https://github.com/misha-hb" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent('outbound_click', {
                    destination: 'github',
                    location: 'home_page',
                })}}  
              >
                <img src={github} alt="GitHub" className="icon" />
              </a>
              <a 
                href="https://linkedin.com/in/mishabutt" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent('outbound_click', {
                    destination: 'linkedin',
                    location: 'home_page',
                  });
                }}
              >
                <img src={linkedin} alt="LinkedIn" className="icon" />
              </a>
              <a 
                href="mailto:mishahumayun2@gmail.com"
                onClick={() => {
                  trackEvent('outbound_click', {
                    destination: 'email',
                    location: 'home_page'
                  })
                }}  
              >
                <img src={email} alt="Email" className="icon" />
              </a>
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent('outbound_click', {
                    destination: 'resume',
                    location: 'home_page'
                  })
                }}  
              >
                <img src={resume} alt="Resume" className="icon" />
              </a>
            </div>
          </div>
          <div className="right-column">
            <h1 className='title-home'>About Me</h1>
            <p className='about'>
              <span className='hello'>Hello, </span> 
              my name is Misha and I am developer with a background in 
              Computer Science and a passion for using technology to produce creative solutions. 
              </p>
              <p className='about'>My experience spans from developing enterprise-grade software at IBM to creating AI-powered chat bots all the way to 
                designing and maintaining Salesforce integrations for a digital marketing agency.</p>
            <p className='about'>My portfolio showcases personal projects where I’ve applied my technical skills to
              create tools that are efficient, intuitive, and inclusive. When I'm not coding, you can find me with 
              a book or at a yoga class.</p>

          </div>
        </div>
      );
    
};

export default Home;