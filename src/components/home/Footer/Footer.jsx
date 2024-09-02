
import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <hr className='footer_hr'/>
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            {/* <li><a href="#Google Developer Groups">Google Developer Groups</a></li> */}
            <li><a href="https://gdg.community.dev/gdg-cloud-chandigarh/" target='_blank' rel='noreferrer'>GDG Cloud Chandigarh</a></li>
            {/* <li><a href="#Google Developer Student Clubs">Google Developer Student Clubs</a></li> */}
            <li><a href="https://gdg.community.dev/gdg-chandigarh/" target='_blank' rel='noreferrer'>GDG Chandigarh</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            {/* <li><a href="#Sponsorship Brochure">Sponsorship Brochure</a></li>
            <li><a href="#Attendee Brochure">Attendee Brochure</a></li> */}
            <li><a href="https://gdg.community.dev/gdg-cloud-chandigarh/" target='_blank' rel='noreferrer'>Call for Speakers</a></li>
            {/* <li><a href="#Frequently Asked Questions">Frequently Asked Questions</a></li> */}
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:gdgcloudchandigarh@gmail.com" target='_blank' rel='noreferrer'>Email Us</a></li>
            {/* <li><a href="#contact-form">Contact Form</a></li>
            <li><a href="#location">Our Location</a></li> */}
          </ul>
        </div>
      </div>
    <hr className='footer_hr'/>
      <div className="footer-bottom">
        <h3>Connect With Us</h3>
        <a href='https://x.com/gdgchandigarh' className='footer_icon' target='_blank' rel='noreferrer'><FaTwitter/></a>
        <a href='https://www.instagram.com/gdgc_chandigarh/' className='footer_icon' target='_blank' rel='noreferrer'><FaInstagram/></a>
        <a href='https://www.linkedin.com/company/gdg-cloud-chandigarh/posts/?feedView=all' className='footer_icon' target='_blank' rel='noreferrer'><FaLinkedin/></a>

      </div>
    </footer>
  );
};

export default Footer;
