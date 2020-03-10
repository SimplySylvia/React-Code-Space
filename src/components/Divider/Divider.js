import React from 'react';
import './Divider.css';

const Divider = props => {
  return <div className={`code__divider ${props.dots ? 'dots' : ''}`}></div>;
};

export default Divider;

Divider.displayName = 'Divider';
