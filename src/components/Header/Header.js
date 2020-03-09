import React from 'react';

const Header = props => {
  return <div className='code__header'>{props.children}</div>;
};

Header.displayName = 'Header';

export default Header;
