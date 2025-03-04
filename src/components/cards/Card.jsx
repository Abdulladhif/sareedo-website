import React, { useState, useEffect } from 'react';
import '../cards/Card.css';
import IMG1 from '../../assets/pic1.jpeg'
import IMG2 from '../../assets/pic2.jpeg'
import IMG3 from '../../assets/pic3.jpeg'
import IMG4 from '../../assets/pic4.jpeg'
import IMG5 from '../../assets/pic5.jpeg'
import IMG6 from '../../assets/pic6.jpeg'
import IMG7 from '../../assets/pic7.jpeg'
import IMG8 from '../../assets/pic8.jpeg'
import IMG9 from '../../assets/pic9.jpeg'
const Cards = () => {
  const slides = [
    <div className="card">
        <img src={IMG1} alt='' />
    </div>,
    <div className="card">
        <img src={IMG2} alt='' />
    </div>,
    <div className="card">
        <img src={IMG3} alt='' />
    </div>,
    <div className="card">
        <img src={IMG4} alt='' />
    </div>,
    <div className="card">
        <img src={IMG5} alt='' />
    </div>,
   <div className="card">
       <img src={IMG6} alt='' />
   </div>,
      <div className="card">
      <img src={IMG7} alt='' />
  </div>,
  ];

  const [curr, setCurr] = useState(0);
  const autoSlideInterval = 6000;

  const next = () => {
    setCurr((curr) => (curr + 1) % slides.length); // Loop through slides
  };

  useEffect(() => {
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlideInterval]);

  return (
    <div className="carousel-container">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${curr === index ? "active" : ""}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurr(index)}
            className={`indicator ${curr === index ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
