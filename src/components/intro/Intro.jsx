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
        <h1>SAREEDO delivers excellence in Transportation, Warehousing, and Car & Truck Rentals, ensuring smooth logistics, secure storage, and reliable vehicle options for all your needs. Trust us to handle the details, so you can focus on a seamless and efficient experience every time</h1>

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
