import React from 'react';
import './PeaceUnity.css';

import peace1 from '../../assets/peace1.jpeg';
import peace2 from '../../assets/peace2.jpeg';
import peace3 from '../../assets/peace3.jpeg';
import peace4 from '../../assets/peace4.jpeg';
import peace5 from '../../assets/peace5.jpeg';
import peace6 from '../../assets/peace6.jpeg';


const PeaceUnity = () => (
  <div className="peaceunity-grid">
    <div className="peaceunity-card"><img src={peace1} alt="Peace 1" className="peaceunity-img" /></div>
    <div className="peaceunity-card"><img src={peace2} alt="Peace 2" className="peaceunity-img" /></div>
    <div className="peaceunity-card"><img src={peace3} alt="Peace 3" className="peaceunity-img" /></div>
    <div className="peaceunity-card"><img src={peace4} alt="Peace 4" className="peaceunity-img" /></div>
    <div className="peaceunity-card"><img src={peace5} alt="Peace 5" className="peaceunity-img" /></div>
    <div className="peaceunity-card"><img src={peace6} alt="Peace 6" className="peaceunity-img" /></div>
  </div>
);

export default PeaceUnity;
