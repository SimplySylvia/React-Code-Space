import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Code from './components/Code';
import * as serviceWorker from './serviceWorker';

const codeString = `//-------------------------------EXTERNAL MODULES
const express = require('express');
//-------------------------------INSTANCED MODULES
const app = express();
//-------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT;
`;

const codeStringTwo = `//------------------------------START SERVER
app.listen(PORT, () => {
  console.log("Listening to port 3000..");
});`;

ReactDOM.render(
  <div id='app'>
    <Code language='javascript' dark theme='monokai' shadow icon>
      <Code.Header>Server.js</Code.Header>
      <Code.Body content={codeString} numbered copy />
      <Code.Divider />
      <Code.Body content={codeStringTwo} numbered start={17} copy />
    </Code>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
