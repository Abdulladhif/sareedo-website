import React from 'react';
import '../testimonials/Testimonial.css'
import pro from '../../assets/prom.png'

const Testimonial = () => {
  return (
    <div className='testimonial'>

    <div>
      <div className="heading-container">
        <h2>Testimonials</h2>
        <div className="line"></div>
      </div> 
      <div className="testimonial-cards">
        <div className="card testimonial-card">
            <div className="name">
                <img src={pro} alt="" />
                <div className="name-content">
                    <h4>Mahad A</h4>
                    <p>11 September 2024</p>
                </div>
         </div>
                <p>I used SAREEDO's transportation and logistics services, and I was thoroughly impressed. The team was professional, the process was smooth, and everything arrived safely and on time. Their attention to detail and commitment to quality made a huge difference. Highly recommend SAREEDO for reliable, top-notch service!</p>
        </div>
        <div className="card testimonial-card">
            <div className="name">
                <img src={pro} alt="" />
                <div className="name-content">
                    <h4>Charles M</h4>
                    <p>23 October 2024</p>
                </div>
         </div>
                <p>I used SAREEDO's transportation and logistics services, and I was thoroughly impressed. The team was professional, the process was smooth, and everything arrived safely and on time. Their attention to detail and commitment to quality made a huge difference. Highly recommend SAREEDO for reliable, top-notch service!</p>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Testimonial
