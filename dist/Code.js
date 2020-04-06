import React from 'react';
import PropTypes from 'prop-types';
import './Code.css';
import Body from './Body/Body';
import Header from './Header/Header';
import Icon from './Icon/Icon';
import Divider from './Divider/Divider';
import Doc from './Doc/Doc';
import Split from './Split/Split';

class Code extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.generateClasses = props => {
      const classes = ['code'];
      classes.push(props.light ? `code--light` : 'code--dark');
      classes.push(`${props.theme}--${props.light ? 'light' : 'dark'}`);
      classes.push(`${props.shadow ? 'code--shadow' : ''}`);
      classes.push(`${props.rounded ? 'rounded' : ''}`);
      classes.push(`${props.neomorph ? 'neo' : ''}`);
      return classes.join(' ');
    }, _temp;
  }

  render() {
    const {
      children
    } = this.props;
    return React.createElement("div", {
      className: this.generateClasses(this.props)
    }, this.props.icon && React.createElement(Icon, {
      language: this.props.language,
      icon: this.props.icon
    }), React.Children.map(children, child => {
      if (!child.type) return child;

      if (child.type.displayName === 'Header') {
        return React.cloneElement(child);
      }

      if (child.type.displayName === 'Doc') {
        return React.cloneElement(child);
      }

      if (child.type.displayName === 'Body') {
        return React.cloneElement(child, {
          theme: this.props.theme,
          language: this.props.language
        });
      }

      if (child.type.displayName === 'Divider') {
        return React.cloneElement(child);
      }

      if (child.type.displayName === 'Split') {
        return React.cloneElement(child, {
          theme: this.props.theme,
          language: this.props.language
        });
      }

      return child;
    }));
  }

}

Code.Header = Header;
Code.Body = Body;
Code.Divider = Divider;
Code.Doc = Doc;
Code.Split = Split;
Code.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  theme: PropTypes.string,
  language: PropTypes.string,
  shadow: PropTypes.bool,
  rounded: PropTypes.bool,
  neomorph: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
export default Code;