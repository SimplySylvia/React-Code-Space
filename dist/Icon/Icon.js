import React from 'react';
import 'devicon';

const getIcon = ({
  icon,
  language
}) => {
  if (icon === true) {
    icon = language;
  }

  if (icon === 'javascript') return 'devicon-nodejs-plain';
  if (icon === 'html') return 'devicon-html5-plain';
  if (icon === 'css') return 'devicon-css3-plain';
  if (icon === 'sass') return 'devicon-sass-original';
  if (icon === 'jsx') return 'devicon-react-original';
};

const Icon = props => {
  return React.createElement("i", {
    className: `code__icon ${getIcon(props)}`
  });
};

export default Icon;