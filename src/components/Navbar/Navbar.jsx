import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
import logo from '../../assests/gdglogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setScrolling(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" className="logo-img" /></Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? 'x' : '☰'}
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className="menu-links">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/speaker" onClick={() => setIsOpen(false)}>Speakers</Link></li>
          <li><Link to="/Schedule" onClick={() => setIsOpen(false)}>Schedule</Link></li>
          <li><Link to="/Team" onClick={() => setIsOpen(false)}>Team</Link></li>
          <li><Link to="/CodeofConduct" onClick={() => setIsOpen(false)}>Code Of Conduct</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
