import React from 'react';
import scheduleData from './scheduleData.json'; 
import Footer from '../home/Footer/Footer'
import './Schedule.css'; 

const Schedule = () => {
  return (
    <>
      <div className="schedule-container">
      <h2>Event Schedule</h2>
      {scheduleData.map((session, index) => (
        <div key={index} className="schedule-item">
          <div className="schedule-time">{session.time}</div>
          <div className="schedule-content">
            <h3>{session.title}</h3>
            <p>{session.description}</p>
            {session.speaker && <p className="speaker">Speaker: {session.speaker}</p>}
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
};

export default Schedule;
