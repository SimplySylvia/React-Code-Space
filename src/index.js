import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Code from './components/Code';
import * as serviceWorker from './serviceWorker';
import snippets from './snippets.json';

ReactDOM.render(
  <div id='app'>
    <Code language='jsx' dark theme='material' icon shadow rounded>
      <Code.Header>Server.jsx</Code.Header>
      <Code.Body content={snippets[0]} numbered highlight='9' />
      <Code.Divider />
      <Code.Doc>
        Here you can leave a little Documentation about a code body or to leave
        a note about something.
      </Code.Doc>
      <Code.Body
        content={snippets[1]}
        numbered
        start={17}
        // collapsable
        // collapsableText='How do we start our server?...'
      />
    </Code>

    <Code language='sass' dark theme='monokai' icon shadow>
      <Code.Header>Divider.scss</Code.Header>
      <Code.Body content={snippets[2]} numbered />
      <Code.Doc>
        Here you can leave a little Documentation about a code body or to leave
        a note about something. This can be as long or as short as you like.
      </Code.Doc>
      <Code.Body content={snippets[3]} numbered start={10} highlight='12' />
    </Code>

    <Code language='html' light theme='material' icon shadow rounded>
      <Code.Header>index.html</Code.Header>
      <Code.Body content={snippets[4]} />
    </Code>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
