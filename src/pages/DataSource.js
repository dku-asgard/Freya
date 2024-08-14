import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { Table, Button, Pagination, FormControl } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./DataSource.css";

const data = [
  { name: 'gangseo_traffic', type: 'CSV', size: '14 GB', status: 'Saved', date: '2023.08.01', user: 'Apdul' },
  { name: 'gangnam_traffic', type: 'JSON', size: '231 KB', status: 'Undefined', date: '2023.09.14', user: 'hoxykim' },
  { name: 'foo_value', type: 'JSON', size: '32 MB', status: 'Saved', date: '2023.09.30', user: 'Apdul' },
  { name: 'simple_data', type: 'CSV', size: '783 KB', status: 'Saved', date: '2023.10.11', user: 'Apdul' },
  { name: 'log_data', type: 'DB', size: '27 GB', status: 'Unconnected', date: '2023.11.03', user: 'sk' },
  { name: 'connection_log', type: 'JSON', size: '518 MB', status: 'Undefined', date: '2023.11.24', user: 'sk' },
  { name: 'random_data', type: 'CSV', size: '1.2 GB', status: 'Saved', date: '2023.12.26', user: 'gn' },
  { name: 'remote_data', type: 'CSV', size: '240 GB', status: 'Saved', date: '2024.01.15', user: 'hoxykim' },
  { name: 'foo_log', type: 'DB', size: '37 MB', status: 'Connected', date: '2024.01.18', user: 'Apdul' },
  { name: 'simple_string', type: 'JSON', size: '67 GB', status: 'Undefined', date: '2024.02.29', user: 'Apdul' },
  { name: 'price_data', type: 'CSV', size: '597 MB', status: 'Saved', date: '2024.03.01', user: 'Apdul' },
  { name: 'random_data', type: 'DB', size: '652 MB', status: 'Unconnected', date: '2024.03.29', user: 'hoxykim' },
];

const statusColors = {
  Saved: 'badge-saved',
  Undefined: 'badge-undefined',
  Unconnected: 'badge-unconnected',
  Connected: 'badge-connected',
};

const typeColors = {
  CSV: 'badge-csv',
  JSON: 'badge-json',
  DB: 'badge-db',
};

export const DataSource = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.date.includes(searchTerm) ||
    item.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex E">
      <div><Sidebar /></div>
      <div style={{ flex: '1 1 auto', display: 'flex', flexFlow: 'column', height: '100vh', overflowY: 'hidden' }}>
        <Navbar />
        <div className="event-content">
          <div className="container mt-4">
            <h1>Data Source</h1>
            <div className="search-container">
              <FormControl
                type="search"
                placeholder="Search"
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="event-header" style={{ display: 'flex', alignItems: 'center' }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Status</th>
                    <th>Date Uploaded</th>
                    <th>Uploaded By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td><span className={`badge ${typeColors[item.type]}`}>{item.type}</span></td>
                      <td>{item.size}</td>
                      <td><span className={`badge ${statusColors[item.status]}`}>{item.status}</span></td>
                      <td>{item.date}</td>
                      <td>{item.user}</td>
                      <td>
                        <Button variant="outline-secondary" size="sm"><FaEdit /></Button>{' '}
                        <Button variant="outline-danger" size="sm"><FaTrash /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <Pagination className="justify-content-center mt-4">
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
