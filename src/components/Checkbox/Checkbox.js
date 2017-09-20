import React from 'react';

import './Chechbox.css';

const Checkbox = ({ isChecked, label, onChange }) => (
  <span className="checkbox" onClick={() => onChange(!isChecked)}>
    <span className="checkbox__icon-container">
      <i className={`checkbox__icon fa fa-${isChecked ? 'check' : ''}`} aria-hidden="true"></i>
    </span>
    <label className="checkbox__label">{label}</label>
  </span>
);

export default Checkbox;