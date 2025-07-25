import React from 'react';
import '../footer/Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Logo from '../../assets/mlogo3.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <img src={Logo} alt="SAREEDO Logo" />
              <h3>SAREEDO</h3>
            </div>
            <p>
              Building climate resilience for Somalia's future through sustainable development, 
              community empowerment, and innovative environmental solutions.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">News & Updates</a></li>
            </ul>
          </div>

          <div className="footer-section footer-links">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Climate Adaptation</a></li>
              <li><a href="#services">Sustainable Agriculture</a></li>
              <li><a href="#services">Water Management</a></li>
              <li><a href="#services">Renewable Energy</a></li>
              <li><a href="#services">Community Training</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h3>Contact Info</h3>
            <p>
              <span className="contact-icon">
                <MdLocationOn />
              </span>
              Mogadishu, Somalia
            </p>
            <p>
              <span className="contact-icon">
                <MdPhone />
              </span>
              +27 62 348 8050
            </p>
            <p>
              <span className="contact-icon">
                <MdEmail />
              </span>
              info@sareedocd.org
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} SAREEDO Community Development Organization. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;