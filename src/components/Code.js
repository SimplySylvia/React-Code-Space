import React from 'react';
import './Code.css';

const Header = props => {
  return <div>{props.children}</div>;
};

Header.displayName = 'Header';

const Body = props => {
  return <div>{props.children}</div>;
};

Body.displayName = 'Body';

class Code extends React.Component {
  static Header = Header;
  static Body = Body;

  render() {
    const { children } = this.props;
    return (
      <div>
        Code Block!!
        {React.Children.map(children, child => {
          if (child.type.displayName === 'Header') {
            return React.cloneElement(child);
          }

          if (child.type.displayName === 'Body') {
            return React.cloneElement(child);
          }

          return child;
        })}
      </div>
    );
  }
}

export default Code;
