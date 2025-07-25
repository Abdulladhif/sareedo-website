import React from 'react';
import '../serviceCard/ServiceCard.css';
import { FaLeaf, FaSeedling, FaTint, FaSolarPanel } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const ServiceCard = ({ image, title, description, category = 'general' }) => {
  const getIcon = () => {
    if (title.toLowerCase().includes('climate') || title.toLowerCase().includes('adaptation')) {
      return <FaLeaf />;
    } else if (title.toLowerCase().includes('crop') || title.toLowerCase().includes('agriculture')) {
      return <FaSeedling />;
    } else if (title.toLowerCase().includes('water') || title.toLowerCase().includes('rain')) {
      return <FaTint />;
    } else if (title.toLowerCase().includes('solar') || title.toLowerCase().includes('energy')) {
      return <FaSolarPanel />;
    }
    return <FaLeaf />;
  };

  return (
    <div className={`service-card ${category}`}>
      <div className="service-card-img">
        <img src={image} alt={title} />
      </div>
      <div className="service-card-content">
        <div className="service-card-icon">
          {getIcon()}
        </div>
        <h4>{title}</h4>
        {description && <p>{description}</p>}
        <div className="service-card-footer">
          <a href="#contact" className="service-card-link">
            Learn More
            <MdArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;