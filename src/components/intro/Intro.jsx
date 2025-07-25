import React from 'react';
import '../intro/Intro.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import Cards from '../cards/Card';

const Intro = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const navHeight = 80;
      const sectionTop = contactSection.offsetTop - navHeight;
      window.scrollTo({ 
        top: sectionTop, 
        behavior: 'smooth' 
      });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const navHeight = 80;
      const sectionTop = aboutSection.offsetTop - navHeight;
      window.scrollTo({ 
        top: sectionTop, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className='intro'>
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      
      <div className="intro-container">
        <div className="intro-content">
          <h1>
            Building <span className="highlight">Climate Resilience</span> for Somalia's Future
          </h1>
          <p>
            SAREEDO is dedicated to empowering communities with sustainable solutions to combat climate change, enhance food security, and create adaptive livelihoods that withstand environmental challenges.
          </p>
          <div className="intro-buttons">
            <button className="btn-hero-primary" onClick={scrollToContact}>
              Get Involved
              <MdOutlineArrowForwardIos />
            </button>
            <button className="btn-hero-secondary" onClick={scrollToAbout}>
              <FaLeaf />
              Learn More
            </button>
          </div>
        </div>

        <div className="intro-visual">
          <div className="carousel-wrapper">
            <Cards />
          </div>
          <div className="stats-overlay">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Communities Served</p>
              </div>
              <div className="stat-item">
                <h3>15K+</h3>
                <p>Lives Impacted</p>
              </div>
              <div className="stat-item">
                <h3>25+</h3>
                <p>Climate Projects</p>
              </div>
              <div className="stat-item">
                <h3>8</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;