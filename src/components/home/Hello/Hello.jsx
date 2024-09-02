// Hello.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Hello.css'; // Import the CSS file for styling

function Hello(){
  useEffect(() => {
    const options = {
      strings: ['Innovative Learners',
  'Networking & Collaboration',
  'Expert Speakers',
  "CCD'24 "],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    const typed = new Typed('.typed_text', options);
    return () => {
      typed.destroy();
    };
  }, []);

  return(
    <div className="hello_container">
        <h1>Hello to, <span className='typed_text' /></h1>
        <div className='Hello_text'>
            We're offering you the opportunity to learn about Cloud Technology, Google Cloud Certifications, Machine Learning, Web Technologies, and App Development from industry experts at Google Cloud Community Day 2024. Our experts will discuss how Google Cloud Platform and Google Cloud Certifications can help you advance your career by increasing your knowledge in these areas.
        </div>
    </div>
        
  )


}

export default Hello;
