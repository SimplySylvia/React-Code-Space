import React from 'react';
import './Doc.css';

const Doc = props => {
  return React.createElement("div", {
    className: "code__doc"
  }, props.children);
};

Doc.displayname = 'Doc';
export default Doc;