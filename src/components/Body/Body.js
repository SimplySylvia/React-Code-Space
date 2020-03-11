import React, { useEffect, useState, useRef } from 'react';
import Copy from '../Copy/Copy';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-highlight/prism-line-highlight';

import './Body.css';
import './material.css';
import './xonokai.css';
import './monokai.css';

const Body = props => {
  const [copied, setCopied] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  });

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000);
  }, [copied]);

  function toggleAccordion() {
    setCollapsed(!collapsed);
    setHeightState(
      collapsed === true ? '0px' : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={`code__body ${copied ? 'shine' : ''}`}>
      {props.collapsable && (
        <p
          className={`code__body__collapse ${collapsed ? 'rotate-right' : ''}`}
          onClick={() => {
            toggleAccordion();
          }}
        >
          {props.collapsableText ? props.collapsableText : 'Reveal'}
        </p>
      )}
      <div
        ref={content}
        className={`open`}
        style={props.collapsable ? { maxHeight: `${setHeight}` } : {}}
      >
        <pre
          style={{ background: 'inherit' }}
          className={`language-${props.language} ${
            props.numbered ? 'line-numbers' : ''
          }`}
          data-start={props.start ? props.start : 1}
          data-line={props.highlight ? props.highlight : null}
        >
          <code style={{ background: 'inherit' }}>{props.content}</code>
        </pre>
        {props.copy && <Copy setCopied={setCopied} content={props.content} />}
      </div>
    </div>
  );
};

Body.displayName = 'Body';

export default Body;
