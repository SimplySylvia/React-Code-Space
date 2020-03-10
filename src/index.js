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
    <Code dark theme='material' shadow icon='js' copy>
      <Code.Header>Server.js</Code.Header>
      <Code.Body language='js' content={codeString} numbered />
      <Code.Body language='js' content={codeStringTwo} numbered start={17} />
    </Code>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
