import React, { useState } from 'react';
import '../services/Service.css';
import Transport from '../transportation/Transport';
import Warehousing from '../warehousing/Warehousing';
import Cars from '../cars/Cars';

const Service = () => {
  // Set "Transportation" as the default active category
  const [activeCategory, setActiveCategory] = useState("Transportation");

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
        {["Transportation", "Warehousing", "Car & Truck rental"].map((category) => (
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
        {activeCategory === "Transportation" && <Transport />}
        {activeCategory === "Warehousing" && <Warehousing />}
        {activeCategory === "Car & Truck rental" && <Cars />}
      </div>
    </div>
  );
};

export default Service;
