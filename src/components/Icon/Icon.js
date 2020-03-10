import React from 'react';
import 'devicon';

const getIcon = language => {
  if (language === 'javascript') return 'devicon-nodejs-plain';
  if (language === 'html') return 'devicon-html5-plain';
  if (language === 'css') return 'devicon-css3-plain';
};

const Icon = props => {
  return <i className={`code__icon ${getIcon(props.icon)}`}></i>;
};

export default Icon;
