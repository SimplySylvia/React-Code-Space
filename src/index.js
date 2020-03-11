import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Code from './components/Code';
import * as serviceWorker from './serviceWorker';

const codeString = `//-------------------------------EXTERNAL MODULES
const express = require('express');
function(){

}
//-------------------------------INSTANCED MODULES
const app = express();
//-------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT;
`;

const codeStringTwo = `//------------------------------START SERVER
app.listen(PORT, () => {
  console.log("Listening to port 3000..");
});`;

const codeStringThree = `.code__divider {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgba(153, 153, 153, 0.561);
}

.code__divider.dots {
  border: none;
}

.code__divider.dots:after {
  content: '. . .';
  padding-left: 3em;
  font-size: 1.5em;
  font-weight: bolder;
  color: rgba(153, 153, 153, 0.561);
}`;

ReactDOM.render(
  <div id='app'>
    <Code language='javascript' light theme='monokai' shadow icon rounded>
      <Code.Header>Server.js</Code.Header>
      <Code.Body content={codeString} numbered copy />
      <Code.Divider />
      <Code.Body
        content={codeStringTwo}
        numbered
        start={17}
        collapsable
        collapsableText='How do we start our server?...'
      />
    </Code>

    <Code language='css' dark theme='monokai' icon>
      <Code.Header>Divider.css</Code.Header>
      <Code.Body content={codeStringThree} numbered />
    </Code>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
