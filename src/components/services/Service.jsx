import React, { useState } from 'react';
import '../services/Service.css';
import Education from '../education/Education';
import Livelihood from '../livelihood/Livelihood';
import Health from '../health/Health';
import Cars from '../cars/Cars';
import PeaceUnity from './PeaceUnity';

const Service = () => {
  const [activeCategory, setActiveCategory] = useState("Peace & Unity");

  const categories = [
    "Peace & Unity",
    "Climate Adaptation",
    "Sustainable Agriculture", 
    "Water Management",
    "Renewable Energy"
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className='services'>
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            Comprehensive climate solutions designed to build resilience, promote sustainability, 
            and empower communities across Somalia to adapt to environmental challenges.
          </p>
        </div>
        
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="service-content">
          {activeCategory === "Peace & Unity" && <PeaceUnity />}
          {activeCategory === "Climate Adaptation" && <Education />}
          {activeCategory === "Sustainable Agriculture" && <Livelihood />}
          {activeCategory === "Water Management" && <Health />}
          {activeCategory === "Renewable Energy" && <Cars />}
        </div>
      </div>
    </div>
  );
};

export default Service;