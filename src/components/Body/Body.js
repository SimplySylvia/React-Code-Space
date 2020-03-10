import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import './material.css';
import './xonokai.css';
import './monokai.css';

const Body = props => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className={`code__body`}>
      <pre
        style={{ background: 'inherit' }}
        className={`language-${props.language} ${
          props.numbered ? 'line-numbers' : ''
        }`}
        data-start={props.start ? props.start : 1}
      >
        <code style={{ background: 'inherit' }}>{props.content}</code>
      </pre>
    </div>
  );
};

Body.displayName = 'Body';

export default Body;
