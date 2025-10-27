import React, {useState} from 'react';
import '../styles/Contact.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import email from '../images/mail.png';
import resume from '../images/resume.png';
import { trackEvent } from '../analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formspree submission
    fetch('https://formspree.io/f/xyzyzbkd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
    }).then((response) => {
      if (response.ok) {
        trackEvent('contact_submit', {
          method: 'form',
          location: 'contact_page',
        });
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } 
      else {
          trackEvent('contact_submit_failed', {
            method: 'form',
            location: 'contact_page',
            status: response.status,
          });
      }
    }).catch((error) => {
      console.error('Error:', error);
      trackEvent('contact_submit_error', {
          method: 'form',
          location: 'contact_page',
          error: error.toString(),
      });
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-content">
        <h1 className="contact-title"><span className="highlight-contact">Contact</span></h1>
          <div className="message-form">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <label className='text-label'>
                  Name:
                  <input
                    type="text-label"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className='text-label'>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className='text-label'>
                  Message:
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <button className="text" type="submit">Send Message</button>
              </form>
            ) : (
              <p className='text'>Thank you! Your message has been sent.</p>
            )}
          </div>
          <div className="icon-links">
              <a 
                href="https://github.com/misha-hb" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent('outbound_click', {
                    destination: 'github',
                    location: 'contact',
                  });
                }}
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
                    location: 'contact',
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
                    location: 'contact',
                  });
                }}>
                <img src={email} alt="Email" className="icon" />
              </a>
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent('outbound_click', {
                    destination: 'resume',
                    location: 'contact',
                  });
                }}>
                <img src={resume} alt="Resume" className="icon" />
              </a>
            </div>
        </div>
      </div>
    )
  };

export default Contact;