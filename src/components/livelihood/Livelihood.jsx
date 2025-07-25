import React from 'react';
import "../livelihood/Livelihood.css";
import ServiceCard from '../serviceCard/ServiceCard';
import IMG1 from '../../assets/pic1.jpeg';
import IMG2 from '../../assets/pic2.jpeg';
import IMG3 from '../../assets/pic3.jpeg';
import IMG4 from '../../assets/pic4.jpeg';
import IMG6 from '../../assets/pic5.jpeg';
import IMG7 from '../../assets/pic6.jpeg';

const Livelihood = () => {
  return (
    <div className="livelihood-services">
      <div className="services-grid">
        <ServiceCard 
          image={IMG1} 
          title="Drought-Resistant Crops" 
          description="Introduction and cultivation of climate-resilient crop varieties that can withstand water scarcity and extreme temperatures." 
          category="sustainable-agriculture"
        />
        <ServiceCard 
          image={IMG4}
          title="Smart Irrigation Systems"
          description="Water-efficient irrigation technologies and techniques to maximize crop yields while conserving precious water resources."
          category="sustainable-agriculture"
        />
        <ServiceCard 
          image={IMG3}
          title="Soil Conservation"
          description="Sustainable farming practices to prevent soil erosion, improve fertility, and maintain productive agricultural land."
          category="sustainable-agriculture"
        />
        <ServiceCard 
          image={IMG2}
          title="Climate-Smart Livestock"
          description="Adaptive livestock management practices that enhance productivity while reducing environmental impact."
          category="sustainable-agriculture"
        />
      </div>
      <div className="services-grid-2">
        <ServiceCard 
          image={IMG6}
          title="Agroforestry Programs"
          description="Integrated tree-crop systems that improve soil health, provide additional income, and enhance carbon storage."
          category="sustainable-agriculture"
        />
        <ServiceCard 
          image={IMG7}
          title="Farmer Training & Support"
          description="Comprehensive training programs on sustainable agricultural practices and climate adaptation techniques."
          category="sustainable-agriculture"
        />
      </div>
    </div>
  );
};

export default Livelihood;