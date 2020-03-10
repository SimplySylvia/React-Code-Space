import React from 'react';
import './Code.css';

import Body from './Body/Body';
import Header from './Header/Header';

import 'devicon';

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

  getIcon = language => {
    if (language === 'javascript') return 'devicon-nodejs-plain';
    if (language === 'html') return 'devicon-html5-plain';
    if (language === 'css') return 'devicon-css3-plain';
  };

  render() {
    const { children } = this.props;
    return (
      <div className={this.generateClasses(this.props)}>
        {this.props.icon && (
          <i className={`code__icon ${this.getIcon(this.props.icon)}`}></i>
        )}
        {this.props.copy && (
          <i className='code__copy'>
            <svg
              data-v-023f9c29=''
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              // style={{ bottom: '7.5px' }}
            >
              <path data-v-023f9c29='' fill='none' d='M0 0h24v24H0z'></path>
              <path
                data-v-023f9c29=''
                fill='#E2E2E4'
                d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z'
              ></path>
            </svg>
          </i>
        )}
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
