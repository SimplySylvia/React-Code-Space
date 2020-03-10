import React from 'react';
import './Code.css';

import Body from './Body/Body';
import Header from './Header/Header';
import Copy from './Copy/Copy';
import Icon from './Icon/Icon';

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
        {this.props.icon && <Icon icon={this.props.icon} />}
        {this.props.copy && <Copy />}
        {React.Children.map(children, child => {
          if (!child.type) return child;
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
