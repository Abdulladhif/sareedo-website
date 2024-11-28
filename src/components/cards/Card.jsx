import React, { useState, useEffect } from 'react';
import '../cards/Card.css';
import IMG3 from '../../assets/m1.png'
import IMG2 from '../../assets/m2.png'

const Cards = () => {
  const slides = [
    // <div className="card">
    //     <img src={IMG1} alt='' />
    // </div>,
    <div className="card">
        <img src={IMG3} alt='' />
    </div>,
    <div className="card">
        <img src={IMG2} alt='' />
    </div>,
    <div className="card">
        <img src={IMG3} alt='' />
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
