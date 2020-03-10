import React from 'react';
import './Code.css';

import Body from './Body/Body';
import Header from './Header/Header';

class Code extends React.Component {
  static Header = Header;
  static Body = Body;

  generateClasses = props => {
    const classes = ['code'];
    classes.push(props.light ? `code--light` : 'code--dark');
    classes.push(`${props.theme}--${props.light ? 'light' : 'dark'}`);
    classes.push(`${props.shadow ? 'code--shadow' : ''}`);
    return classes.join(' ');
  };

  render() {
    const { children } = this.props;
    return (
      <div className={this.generateClasses(this.props)}>
        {this.props.icon && <i className='code__icon'>{this.props.icon}</i>}
        {this.props.copy && <i className='code__copy'>C</i>}
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
