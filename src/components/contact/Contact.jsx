import React, { useState } from 'react';
import '../contact/Contact.css';
import { ImPhoneHangUp } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    const { name, email, phone, message } = formData;

    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Email is invalid';
    
    if (!phone) formErrors.phone = 'Phone number is required';
    else if (!/^\+?\d{10,15}$/.test(phone)) formErrors.phone = 'Phone number is invalid';
    
    if (!message) formErrors.message = 'Message is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);

      // Create the mailto link with pre-filled subject and body
      const subject = encodeURIComponent(`New Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
      const mailtoLink = `mailto:info@sareedocd.org?subject=${subject}&body=${body}`;

      // Open the default email client (Gmail if set as default)
      window.location.href = mailtoLink;

      // Clear form data
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <div className='contact'>
      <div className="heading-container">
        <h2>Contact Us</h2>
        <div className="line"></div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Contact information section */}
        <div className="ctc-m">
          <div className="ctc-m-content">
            <a href="">
              <div className="ctc-card">
                <ImPhoneHangUp className='ctc-icon' />
                <h5>Phone</h5>
                <p>+2762 3488 050</p>
              </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <div className="ctc-card">
                <IoLogoWhatsapp className='ctc-icon' />
                <h5>Whatsapp</h5>
                <p>+2762 3488 050</p>
              </div>
            </a>

            <div className="ctc-card">
              <MdEmail className="ctc-icon" />
              <h5>Email</h5>
              <p>info@sareedocd.org</p>
            </div>

            <div className="ctc-card">
              <BsHouseFill className='ctc-icon' />
              <h5>Our Office</h5>
              <p>Mogadishu, Somalia</p>
            </div>
          </div>
          <div className="map-container">
            <iframe
              className='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127334.03264348!2d45.2872!2d2.0469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58424c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2s!4v1731608792332!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Form section */}
        <div className="ctc-inputs">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder='Your Name'
              value={formData.name}
              onChange={handleInputChange}
              required
              className='user-name'
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder='example@gmail.com'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder='+2761 3286 152'
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder='Your Message'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="intro-btn">
            <button type="submit">Send Message
              <MdOutlineArrowForwardIos className='intro-icon' />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
