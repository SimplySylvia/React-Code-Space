import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Code from './components/Code';
import * as serviceWorker from './serviceWorker';

const codeString = `var numbers = {
  one: 1,
  two: 2
};

var keys = [];

for (var number in numbers) {
  if(numbers.hasOwnProperty(number)){
    keys.push(number)
  }
}

keys; // [ 'one', 'two' ]`;

ReactDOM.render(
  <div id='app'>
    <Code dark>
      <Code.Header>My Cool Code</Code.Header>
      <Code.Body
        language='javascript'
        theme='materialDark'
        content={codeString}
      />
    </Code>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
