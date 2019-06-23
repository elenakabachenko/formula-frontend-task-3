import React from 'react';
import './style.scss';

export const TextInput = ({ className, name, value, placeholder, onChange, error, type }) =>
  <div className={`form-group input ${error && 'has-error'}`}>
    <input type={type} className={className} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    <div className="error">{error}</div>
  </div>