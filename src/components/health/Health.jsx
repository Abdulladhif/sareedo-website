import React from 'react';
import "./Health.css";
import ServiceCard from '../serviceCard/ServiceCard';
import IMG1 from '../../assets/pic1.jpeg';
import IMG2 from '../../assets/pic2.jpeg';
import IMG3 from '../../assets/pic3.jpeg';
import IMG4 from '../../assets/pic4.jpeg';
import IMG6 from '../../assets/pic5.jpeg';
import IMG7 from '../../assets/pic6.jpeg';

const Health = () => {
  return (
    <div className="health-services">
      <div className="services-grid">
        <ServiceCard 
          image={IMG1} 
          title="Rainwater Harvesting" 
          description="Installation of systems to collect and store rainwater for household and agricultural use during dry seasons." 
          category="water-management"
        />
        <ServiceCard 
          image={IMG4}
          title="Groundwater Management"
          description="Sustainable extraction and conservation of groundwater resources through community-based management systems."
          category="water-management"
        />
        <ServiceCard 
          image={IMG3}
          title="Water Purification Systems"
          description="Implementation of clean water technologies to ensure safe drinking water access for rural communities."
          category="water-management"
        />
        <ServiceCard 
          image={IMG2}
          title="Watershed Protection"
          description="Conservation and restoration of natural watersheds to maintain water quality and availability."
          category="water-management"
        />
      </div>
      <div className="services-grid-2">
        <ServiceCard 
          image={IMG6}
          title="Water-Efficient Infrastructure"
          description="Development of climate-resilient water infrastructure that can withstand extreme weather events."
          category="water-management"
        />
        <ServiceCard 
          image={IMG7}
          title="Community Water Governance"
          description="Training local communities in water resource management and establishing sustainable governance structures."
          category="water-management"
        />
      </div>
    </div>
  );
};

export default Health;