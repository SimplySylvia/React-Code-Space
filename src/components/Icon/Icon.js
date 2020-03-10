import React from 'react';
import 'devicon';

const getIcon = ({ icon, language }) => {
  if (icon === true) {
    icon = language;
  }
  if (icon === 'javascript') return 'devicon-nodejs-plain';
  if (icon === 'html') return 'devicon-html5-plain';
  if (icon === 'css') return 'devicon-css3-plain';
  if (icon === 'react') return 'devicon-react-original';
};

const Icon = props => {
  return <i className={`code__icon ${getIcon(props)}`}></i>;
};

export default Icon;
