import React from 'react';
import '../serviceCard/ServiceCard.css';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className='card service-card'>
      <div className="service-card-img">
        <img src={image} alt={title} />
      </div>
      <div className="service-card-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

