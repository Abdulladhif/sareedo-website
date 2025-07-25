import React, { useState } from 'react';
import '../services/Service.css';
import Education from '../education/Education';
import Livelihood from '../livelihood/Livelihood';
import Health from '../health/Health';
import Cars from '../cars/Cars';

const Service = () => {
  // Set "Transportation" as the default active category
  const [activeCategory, setActiveCategory] = useState("Climate Adaptation");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className='services'>
      <div className="heading-container">
        <h2>Our Services</h2>
        <div className="line"></div>
      </div> 
      <div className="category-link">
        {["Climate Adaptation", "Sustainable Agriculture", "Water Management", "Renewable Energy"].map((category) => (
          <h3
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category}
          </h3>
        ))}
      </div>

      <div className="service-content">
        {activeCategory === "Climate Adaptation" && <Education />}
        {activeCategory === "Sustainable Agriculture" && <Livelihood />}
        {activeCategory === "Water Management" && <Health />}
        {activeCategory === "Renewable Energy" && <Cars />}
      </div>
    </div>
  );
};

export default Service;
