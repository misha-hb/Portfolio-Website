import React from 'react';
import './Home.css';
import profileImg from '../images/profile-img.jpeg'; // Adjust the path and file extension if necessary
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import email from '../images/mail.png';
import resume from '../images/resume.png';

const Home = () => {
    return (
        <div className="home-container">
          <div className="left-column">
            <img src={profileImg} alt="Profile" className="profile-image" />
            <div className="icon-links">
              <a href="https://github.com/misha-hb" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="icon" />
              </a>
              <a href="https://linkedin.com/in/mishabutt" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="icon" />
              </a>
              <a href="mailto:mishahumayun2@gmail.com">
                <img src={email} alt="Email" className="icon" />
              </a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <img src={resume} alt="Resume" className="icon" />
              </a>
            </div>
          </div>
          <div className="right-column">
            <h1 className='heading'>Hi, I'm Misha!</h1>
            <div style={{marginTop: '15px'}}>
              <p className='about'>I am a recent University graduate with a strong foundation in Computer Science 
                and a drive to make the world a better place through technology. With experience 
                in both frontend and backend development, I thrive on creating efficient, user-friendly 
                solutions and inclusive systems that improves people’s lives for a better future. During 
                my work experience, I modernized legacy systems, optimized performance, and 
                ensured accessibility for all users.</p>
              <p className='about'>My portfolio showcases projects where I’ve applied my technical skills to 
                real-world problems, from creating responsive web interfaces to designing 
                scalable backend infrastructures. When I'm not coding, you can find me with 
                a book or at a yoga class.</p>
            </div>
          </div>
        </div>
      );
    
};

export default Home;