import React from 'react';
import PropTypes from 'prop-types';
import './Divider.css';

const Divider = props => {
  return React.createElement("div", {
    className: `code__divider ${props.dots ? 'dots' : ''}`
  });
};

Divider.displayName = 'Divider';
Divider.propTypes = {
  dots: PropTypes.bool
};
export default Divider;