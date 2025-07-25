import React from 'react';
import './Education.css';
import ServiceCard from '../serviceCard/ServiceCard';
import IMG1 from '../../assets/pic1.jpeg';
import IMG2 from '../../assets/pic2.jpeg';
import IMG3 from '../../assets/pic3.jpeg';
import IMG4 from '../../assets/pic4.jpeg';
import IMG6 from '../../assets/pic5.jpeg';
import IMG7 from '../../assets/pic6.jpeg';

const Education = () => {
  return (
    <div>
        <div className="tsp-wrapper">
            <div className='tsp-container'>
                <ServiceCard 
                    image={IMG1} 
                    title="Climate Risk Assessment" 
                    description="Comprehensive analysis of climate vulnerabilities and adaptation strategies for communities and ecosystems." 
                    />
                <ServiceCard 
                    image={IMG4}
                    title="Early Warning Systems"
                    description="Advanced monitoring and alert systems for drought, floods, and extreme weather events to protect vulnerable populations."
                    />
                <ServiceCard 
                    image={IMG3}
                    title="Community Resilience Building"
                    description="Training programs and capacity building initiatives to strengthen community preparedness for climate impacts."
                    />
                <ServiceCard 
                    image={IMG2}
                    title="Climate Education Programs"
                    description="Educational initiatives to raise awareness about climate change impacts and promote sustainable practices."
                    />
            </div>
            <div className='tsp-container2'>
                <ServiceCard 
                    image={IMG6}
                    title="Ecosystem Restoration"
                    description="Reforestation and land rehabilitation projects to restore degraded environments and enhance carbon sequestration."
                    />
                <ServiceCard 
                    image={IMG7}
                    title="Climate Policy Support"
                    description="Technical assistance for developing and implementing local climate adaptation and mitigation policies."
                    />
            </div>
    </div>
    </div>
  )
}

export default Education