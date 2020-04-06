import React from 'react';
import PropTypes from 'prop-types';
import './Divider.css';

const Divider = props => {
  return <div className={`code__divider ${props.dots ? 'dots' : ''}`}></div>;
};

Divider.displayName = 'Divider';

Divider.propTypes = {
  dots: PropTypes.bool
}

export default Divider;