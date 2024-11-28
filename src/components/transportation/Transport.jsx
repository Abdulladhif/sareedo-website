import React from 'react';
import '../transportation/Transport.css'
import ServiceCard from '../serviceCard/ServiceCard';
import IMG1 from '../../assets/ms1.png';
import IMG2 from '../../assets/ms5.png';
import IMG3 from '../../assets/ms3.png';
import IMG4 from '../../assets/ms4.png';
import IMG6 from '../../assets/ms6.png';
import IMG7 from '../../assets/ms7.png';


const Transport = () => {
  return (
    <div>
        <div className="tsp-wrapper">
            <div className='tsp-container'>
                <ServiceCard 
                    image={IMG1}
                    title="Freight Transportation Services"
                    />
                <ServiceCard 
                    image={IMG4}
                    title="Last-Mile Delivery"
                    />
                <ServiceCard 
                    image={IMG3}
                    title="Warehousing & Distribution"
                    />
                <ServiceCard 
                    image={IMG4}
                    title="Logistics Management"
                    />
            </div>
            <div className='tsp-container2'>
                <ServiceCard 
                    image={IMG6}
                    title="Specialized Transportation"
                    />
                <ServiceCard 
                    image={IMG7}
                    title="Shuttle & Employee Transportation"
                    />
            </div>
    </div>
    </div>
  )
}

export default Transport