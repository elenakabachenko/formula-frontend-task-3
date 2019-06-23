import React from 'react';

import './style.scss';

export const Button = ({ className, text }) =>
  <button className={className}>{text}</button>