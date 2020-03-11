import React from 'react';
import './Doc.css';

const Doc = props => {
  return <div className='code__doc'>{props.children}</div>;
};

Doc.displayname = 'Doc';

export default Doc;
