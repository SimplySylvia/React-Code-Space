import React from 'react';

const Header = props => {
  return React.createElement("div", {
    className: "code__header"
  }, props.children);
};

Header.displayName = 'Header';
export default Header;