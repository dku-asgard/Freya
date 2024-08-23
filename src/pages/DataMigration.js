import React, { useState } from 'react';
import Sidebar from '../Sidebar.js';
import Navbar from '../Navbar.js';
import Dropdown from '../components/Dropdown.js';
import ProgressBar from '../components/ProgressBar.js';
import "./DataMigration.css";
import { FaArrowRight } from "react-icons/fa";

export const DataMigration = () => {
  const dbOptions = ['information_schema', 'public'];
  const [sourceDB, setSourceDB] = useState('information_schema');
  const [targetDB, setTargetDB] = useState('public');
  const progress = 80;
  return (
    <div className="d-flex E">
      <div><Sidebar /></div>
      <div style={{ flex: '1 1 auto', display: 'flex', flexFlow: 'column', height: '100vh', overflowY: 'hidden' }}>
        <Navbar />
        <div className="event-content">
          <div className="event-header" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="migration-container">
              <div className="dropdown-container">
                <Dropdown 
                  options={dbOptions} 
                  selected={sourceDB} 
                  onChange={(e) => setSourceDB(e.target.value)} 
                />
                <span className="arrow"><FaArrowRight /></span>
                <Dropdown 
                  options={dbOptions} 
                  selected={targetDB} 
                  onChange={(e) => setTargetDB(e.target.value)} 
                />
                <button className="execute-button">execute</button>
              </div>
              <div className="db-logos">
                <div className="db">
                  <img className='imgs' src="/images/postgre-logo.png" alt="PostgreSQL 로고" />
                  <p>DB_NAME<br/>PostgreSQL</p>
                </div>
                <span className="arrow"><FaArrowRight /></span>
                <div className="db">
                  <img className='imgs' src="/images/mysql-logo.png" alt="MySQL 로고" />
                  <p>DB_NAME<br/>MySQL</p>
                </div>
              </div>
              <div className='prog'>
              <ProgressBar progress = {progress} className='prog-item' /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
