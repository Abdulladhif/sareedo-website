import React from 'react';
import '../intro/Intro.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Cards from '../cards/Card';


const Intro = () => {
  // Function to scroll to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='intro'>

      <div className="intro-content">
        <h1>Building Climate Resilience for Somalia's Future. SAREEDO is dedicated to empowering communities with sustainable solutions to combat climate change, enhance food security, and create adaptive livelihoods that withstand environmental challenges.</h1>
        <div className="intro-btn int-btn">
          <button onClick={scrollToContact}>
            Contact us
            <MdOutlineArrowForwardIos className='intro-icon' />
          </button>  
        </div>
      </div>

      {/* Carousel  */}
      <div className="carousel">
        <Cards/>
      </div>

    </div>
  );
}

export default Intro;
