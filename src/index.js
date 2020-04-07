import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Code from './components/Code';
import * as serviceWorker from './serviceWorker';
import snippets from './snippets.json';

ReactDOM.render(
  <div id='app' className="app--light">
    <Code language='javascript' light theme='material' icon shadow>
      <Code.Header>Server.jsx</Code.Header>
      <Code.Body
        content={snippets[1]}
        copy
        language='css'
      />
    </Code>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
