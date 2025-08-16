import React, { useState } from 'react';
import '../contact/Contact.css';
import { ImPhoneHangUp } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the mailto link with pre-filled subject and body
    const subject = encodeURIComponent(`New Message from ${formData.name} - SAREEDO Contact Form`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
This message was sent from the SAREEDO website contact form.
    `);
    const mailtoLink = `mailto:info@sareedocd.org?subject=${subject}&body=${body}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Clear form data
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className='contact'>
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            Ready to make a difference? Contact us to learn more about our climate initiatives 
            or to discuss partnership opportunities in building a sustainable future for Somalia.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <ImPhoneHangUp />
                </div>
                <h5>Phone</h5>
                <p>
                  <a href="tel:+27623488050">+27 83 483 7112</a>
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <IoLogoWhatsapp />
                </div>
                <h5>WhatsApp</h5>
                <p>
                  <a href="https://wa.me/27623488050" target="_blank" rel="noopener noreferrer">
                    +27 62 348 8050
                  </a>
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <MdEmail />
                </div>
                <h5>Email</h5>
                <p>
                  <a href="mailto:info@sareedocd.org">info@sareedocd.org</a>
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <MdLocationOn />
                </div>
                <h5>Our Office</h5>
                <p>Mogadishu, Somalia</p>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <MdLocationOn />
                </div>
                <h5>Branch Office</h5>
                <p>Dhuusamreb, Somalia</p>
              </div>
            </div>

            <div className="map-container">
              <iframe
                className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127334.03264348!2d45.2872!2d2.0469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58424c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2s!4v1731608792332!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAREEDO Office Location"
              ></iframe>
            </div>
            <div className="map-container">
              <iframe
                className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127334.03264348!2d46.1021!2d5.5358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d8b2e2e2e2e2e2e%3A0x8b8b8b8b8b8b8b8b!2sDhuusamareeb%2C%20Somalia!5e0!3m2!1sen!2s!4v1731608792332!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dhuusamreb Branch Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-control">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder='Your Full Name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder='your.email@example.com'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-control">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder='+27 62 348 8050'
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-control">
                <label htmlFor="message">Message *</label>
                <textarea
                  name="message"
                  placeholder='Tell us about your project, partnership opportunity, or how we can help...'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
                <MdOutlineArrowForwardIos />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;