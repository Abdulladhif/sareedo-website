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
        <h1> Dedicated to uplifting communities through education, empowerment, and sustainable development. SAREEDO is committed to creating opportunities, fostering growth, and making a lasting impact through our initiatives.</h1>
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
