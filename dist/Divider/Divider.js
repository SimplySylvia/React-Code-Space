import React from 'react';
import './Divider.css';

const Divider = props => {
  return React.createElement("div", {
    className: `code__divider ${props.dots ? 'dots' : ''}`
  });
};

export default Divider;
Divider.displayName = 'Divider';