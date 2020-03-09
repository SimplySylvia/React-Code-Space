import React from 'react';
import './Code.css';

import Body from './Body/Body';
import Header from './Header/Header';

class Code extends React.Component {
  static Header = Header;
  static Body = Body;

  render() {
    const { children } = this.props;
    return (
      <div
        className={`code ${
          this.props.light ? `code--light ${this.props.theme}Light` : ''
        } ${this.props.dark ? `code--dark ${this.props.theme}Dark` : ''}`}
      >
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
