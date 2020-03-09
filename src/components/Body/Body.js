import React, { useEffect } from 'react';
import Prism from 'prismjs';

import './materialdark.css';
import './materialLight.css';

const Body = props => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className={`code__body ${props.theme}`}>
      <pre
        style={{ background: 'inherit' }}
        className={`language-${props.language}`}
      >
        <code style={{ background: 'inherit' }}>{props.content}</code>
      </pre>
    </div>
  );
};

Body.displayName = 'Body';

export default Body;
