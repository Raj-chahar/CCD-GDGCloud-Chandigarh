// GetTicketsButton.js
import React from 'react';
import './GetTickets.css'; // Import the CSS file for styling

const GetTicketsButton = ({ link }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button className="get-tickets-button" onClick={handleClick}>
      Get Tickets
    </button>
  );
};

export default GetTicketsButton;
