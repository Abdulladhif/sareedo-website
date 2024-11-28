import React from 'react';
import '../socialIcons/Socials.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Social = () => {
  return (
    <div className='socials'>
        <div className="s-sub">
       <a href="" target='blank'>
        <RiWhatsappFill className='s-icon'/>
       </a>
       <a href="#">
        <FaSquareInstagram className='s-icon'/>
       </a>
       <a href="" target='blank'>
       <FaFacebookSquare className='s-icon'/>
       </a>

       </div>
    </div>
  )
}

export default Social
