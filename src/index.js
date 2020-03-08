import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Code from './components/Code';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Code theme='material' language='js'>
    <Code.Header>My Cool Code</Code.Header>
    <Code.Body>Code code code</Code.Body>
  </Code>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
