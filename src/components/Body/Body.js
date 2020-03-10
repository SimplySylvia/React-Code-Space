import React, { useEffect, useState } from 'react';
import Copy from '../Copy/Copy';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import './Body.css';
import './material.css';
import './xonokai.css';
import './monokai.css';

const Body = props => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  });

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000);
  }, [copied]);

  return (
    <div className={`code__body ${copied ? 'shine' : ''}`}>
      <pre
        style={{ background: 'inherit' }}
        className={`language-${props.language} ${
          props.numbered ? 'line-numbers' : ''
        }`}
        data-start={props.start ? props.start : 1}
      >
        <code style={{ background: 'inherit' }}>{props.content}</code>
      </pre>
      {props.copy && <Copy setCopied={setCopied} content={props.content} />}
    </div>
  );
};

Body.displayName = 'Body';

export default Body;
