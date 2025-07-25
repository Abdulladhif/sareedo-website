import React, { useState, useEffect } from 'react';
import '../navbar/Navbar.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Logo from '../../assets/mlogo3.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({ 
        top: sectionTop, 
        behavior: 'smooth' 
      });
    }
    setIsOpen(false);
  };

  const refreshPage = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">
          <a href="#" onClick={(e) => refreshPage(e)}>
            <img src={Logo} alt="SAREEDO Logo" className='logo-img'/>
          </a>
        </div>
        
        <div className="nav-items">
          <ul className="nav-links">
            <li className="items">
              <a href="#" onClick={(e) => refreshPage(e)}>Home</a>
            </li>
            <li className="items">
              <a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a>
            </li>
            <li className="items">
              <a href="#services" onClick={(e) => scrollToSection('services', e)}>Services</a>
            </li>
          </ul>
          <div className="nav-btn">
            <button onClick={(e) => scrollToSection('contact', e)}>
              Contact Us
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`drop-down-nav ${isOpen ? 'active' : ''}`}>
          <ul className="drop-down-items">
            <li className="items">
              <a href="#" onClick={(e) => refreshPage(e)}>Home</a>
            </li>
            <li className="items">
              <a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a>
            </li>
            <li className="items">
              <a href="#services" onClick={(e) => scrollToSection('services', e)}>Services</a>
            </li>
            <li className="items">
              <a href="#contact" onClick={(e) => scrollToSection('contact', e)}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;