import React from 'react';
import './Dropdown.css';

function Dropdown({ options, selected, onChange }) {
  return (
    <div className="dropdown">
      <select value={selected} onChange={onChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
