import React from 'react';
import './style.scss';

export const TextArea = ({ className, name, value, placeholder, onChange, error }) =>
  <div className={`form-group textarea ${error && 'has-error'}`}>
    <textarea className={className} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    <div className="error">{error}</div>
  </div>