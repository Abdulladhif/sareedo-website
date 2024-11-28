import React, { useState } from 'react';
import '../navbar/Navbar.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaWindowCloseSolid } from "react-icons/lia";
import Logo from '../../assets/mlogo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to section
  const scrollToSection = (id, event) => {
    event.preventDefault();  // Prevent default anchor behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);  // Close the dropdown when a link is clicked
  };

  // Refresh page (scroll to top)
  const refreshPage = (event) => {
    event.preventDefault();  // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);  // Close the dropdown when the home link is clicked
  };

  return (
    <nav>
      <div className="logo">
        <a href="#" onClick={(e) => refreshPage(e)}>
            {/* LOGO */}
          <img src={Logo} alt=""  className='logo-img'/>
          </a>
      </div>
      <ul className="nav-items">
        <li className="items">
          <a href="#" onClick={(e) => refreshPage(e)}>home</a>
        </li>
        <li className="items">
          <a href="#" onClick={(e) => scrollToSection('about', e)}>about</a>
        </li>
        <li className="items">
          <a href="#" onClick={(e) => scrollToSection('services', e)}>services</a>
        </li>
        <li className="items nav-btn">
          <button onClick={(e) => scrollToSection('contact', e)}>
            Book us
            <MdOutlineArrowForwardIos className='intro-icon' />
          </button>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleDropdown}>
        {isOpen ? (
          <LiaWindowCloseSolid className='close-btn-icon' />
        ) : (
          <RxHamburgerMenu className='open-btn-icon' />
        )}
      </div>
      
      {isOpen && (
        <div className="drop-down-nav">
          <ul className="drop-down-items">
            <li className="items">
              <a href="#" onClick={(e) => refreshPage(e)}>home</a>
            </li>
            <li className="items">
              <a href="#" onClick={(e) => scrollToSection('about', e)}>about</a>
            </li>
            <li className="items">
              <a href="#" onClick={(e) => scrollToSection('services', e)}>services</a>
            </li>
            <li className="items nav-btn">
              <a href="#" onClick={(e) => scrollToSection('contact', e)}>Book Us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
