import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import './DataConnections.css';

export const DataConnections = () => {
  const handleConnectionClick = (type) => {
    console.log(`${type} button clicked`);
    // Add functionality for button click here
  };

  return (
    <div className="d-flex E">
      <div className="sidebar"><Sidebar /></div>
      <div className="main-content">
        <Navbar />
        <div className="event-content">
          <div className="event-header">
            <h3 className='main-header'>Vendor</h3>
            <div className="connection-box" onClick={() => handleConnectionClick('MySQL')}>
              <img src="/images/mysql-logo.png" alt="MySQL" className="logo" />
              <div className="connection-text">MySQL</div>
            </div>
            <div className="connection-box" onClick={() => handleConnectionClick('PostgreSQL')}>
              <img src="/images/elephant.png" alt="PostgreSQL" className="logo" />
              <div className="connection-text">PostgreSQL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
