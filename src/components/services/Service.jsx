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
        {["Education", "Livelihood Support", "Humanitarian Aid", "Health Services"].map((category) => (
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
        {activeCategory === "Education" && <Education />}
        {activeCategory === "Livelihood Support" && <Livelihood />}
        {activeCategory === "Health Services" && <Health />}
      </div>
    </div>
  );
};

export default Service;
