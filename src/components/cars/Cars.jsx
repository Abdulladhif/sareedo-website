import React from 'react';
import "../cars/Cars.css";
import ServiceCard from '../serviceCard/ServiceCard';
import IMG1 from '../../assets/pic1.jpeg';
import IMG2 from '../../assets/pic2.jpeg';
import IMG3 from '../../assets/pic3.jpeg';
import IMG4 from '../../assets/pic4.jpeg';
import IMG6 from '../../assets/pic5.jpeg';
import IMG7 from '../../assets/pic6.jpeg';

const Cars = () => {
  return (
    <div>
        <div className="tsp-wrapper">
            <div className='tsp-container'>
                <ServiceCard 
                    image={IMG1} 
                    title="Solar Power Systems" 
                    description="Installation of solar panels and energy storage systems to provide clean, reliable electricity for communities." 
                    />
                <ServiceCard 
                    image={IMG4}
                    title="Wind Energy Solutions"
                    description="Small-scale wind turbines and hybrid systems for sustainable energy generation in rural areas."
                    />
                <ServiceCard 
                    image={IMG3}
                    title="Biogas Production"
                    description="Community-based biogas systems that convert organic waste into clean cooking fuel and electricity."
                    />
                <ServiceCard 
                    image={IMG2}
                    title="Energy-Efficient Cookstoves"
                    description="Distribution of improved cookstoves that reduce fuel consumption and indoor air pollution."
                    />
            </div>
            <div className='tsp-container2'>
                <ServiceCard 
                    image={IMG6}
                    title="Mini-Grid Development"
                    description="Establishment of localized electricity grids powered by renewable energy sources for rural electrification."
                    />
                <ServiceCard 
                    image={IMG7}
                    title="Energy Access Training"
                    description="Technical training programs for local technicians to maintain and operate renewable energy systems."
                    />
            </div>
    </div>
    </div>
  )
}

export default Cars