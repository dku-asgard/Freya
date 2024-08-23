import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import './DataVendorSelect.css';
import '../components/Box.css';
import { useNavigate } from 'react-router-dom';

export const DataVendorSelect = () => {
  const navigate = useNavigate();

  const handleConnectionClick = (type) => {
    // 선택한 벤더와 함께 DataConnections 페이지로 이동
    navigate('/data-connections', { state: { vendorType: type } });
  };

  return (
    <div className="d-flex E">
      <div><Sidebar /></div>
      <div style={{ flex: '1 1 auto', display: 'flex', flexFlow: 'column', height: '100vh', overflowY: 'hidden' }}>
        <Navbar />
        <div className="event-content">
          <div className="event-header">
            <div className='connection-box-header'>
            <h3 className='main-header'><strong>Vendor</strong></h3>
            </div>
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

export default DataVendorSelect;
