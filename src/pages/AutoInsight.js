import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import "./AutoInsight.css";

export const AutoInsight = () => {
  return (
    <div className="d-flex E">
      <div><Sidebar /></div>
      <div style={{ flex: '1 1 auto', display: 'flex', flexFlow: 'column', height: '100vh', overflowY: 'hidden' }}>
        <Navbar />
        <div className="event-content">
          <div className="event-header" style={{ display: 'flex', alignItems: 'center' }}>
          
          </div>
        </div>
      </div>
    </div>
  );
}
