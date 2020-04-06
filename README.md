<img src="https://github.com/DaltonHart/React-Code-Space/blob/master/assets/codespace.png" alt="logo"  width="200px"/>

# React Code Space
React Code Space is a stylized code syntax highlighter for your documentation/ lesson building.

![](https://img.shields.io/npm/l/react-code-space?style=for-the-badge)
![](https://img.shields.io/npm/v/react-code-space?style=for-the-badge)


## Code

Code is the base import. It will recieve the below compound components for formatting your code.

```js
import Code from 'react-code-space';

function App() {
  return <Code></Code>;
}

export default App;
```

### Code props

| Name     | Description                                         | Options                            | Usage                               |
| -------- | --------------------------------------------------- | ---------------------------------- | ----------------------------------- |
| language | sets the language of the code space                 | javascript, jsx, css, scss, html   | `<Code language="jsx">`             |
| dark     | set the type of code space to dark                  | default is true                    | `<Code dark>`                       |
| light    | set the type of code space to light                 | default is true                    | `<Code light>`                      |
| theme    | set the syntax theme of the code space              | material, monokai, xonokai         | `<Code theme="monokai">`            |
| icon     | adds an icon of the language. default is language.  | react, javascript, css, scss, html | `<Code icon>`, `<Code icon="css"/>` |
| shadow   | adds a shadow to the code space                     | default is true                    | `<Code shadow>`                     |
| neomorph | adds a neomorphism design effect to the code space. | default is true                    | `<Code neomorph>`                   |
| rounded   | adds a border radius to the code space              | default is true                    | `<Code rounded>`                    |

## Code Header

Header can recieve any child and output it in a small container within the Code Space;

```js
import Code from 'react-code-space';

function App() {
  return (
    <Code dark theme='material' language='javascript'>
      <Code.Header>A lovely Header!</Code.Header>
    </Code>
  );
}

export default App;
```

## Code Body

Body is the syntax highlighting portion of the code space. This allows multiple code blocks within a code space.

```js
import Code from 'react-code-space';

const codeString = '//Your code here!';

function App() {
  return (
    <Code dark theme='material' language='javascript'>
      <Code.Header>A lovely Header!</Code.Header>
      <Code.Body content={codeString} />
    </Code>
  );
}

export default App;
```

### Body Props

| Name            | Description                                       | Options                                    | Usage                                                                 |
| --------------- | ------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| content         | recieves a string of code to display              | a string                                   | `<Code.Body content={codeString} />`                                  |
| numbered        | adds line numbers to code output                  | default is true                            | `<Code.Body numbered/>`                                               |
| start           | starting point for line numbers                   | default is 1. Will recieve any number      | `<Code.Body numbered start={17}/>`                                    |
| highlight       | accepts string numbers to highlight lines of code | string of line numbers. will accept ranges | `<Code.Body highlight={"4"} />`,`<Code.Body content={"4,8-11,16"} />` |
| collapsable     | makes the code body an animated dropdown          | default is true                            | `<Code.Body collapsable />`                                           |
| collapsableText | sets the text for the animated dropdown           | a string                                   | `<Code.Body collapsableText={"Here is the code!"} />`                 |
| copy            | adds a copy to clipboard functionality            | default is true                            | `<Code.Body copy />`                                                  |
| blur            | adds a blurred effect to reveal on hover          | default is true                            | `<Code.Body blur />`                                                  |

## Code Doc

Doc is an embedded slot in the code space to add detailed text inline with the code space.

```js
import Code from 'react-code-space';

const codeString = '//Your code here!';

function App() {
  return (
    <Code dark theme='material' language='javascript'>
      <Code.Header>A lovely Header!</Code.Header>
      <Code.Body content={codeString} />
      <Code.Doc>Some simple text explaining the code above or below.</Code.Doc>
    </Code>
  );
}

export default App;
```

## Code Divider

Divider is a simple split to seperate the code blocks with a themed horizontal rule. This can also be styled with three dots with the dots property.

### Divider Props

| Name | Description                     | Options         | Usage                  |
| ---- | ------------------------------- | --------------- | ---------------------- |
| dots | changes the style to three dots | default is true | `<Code.Divider dots/>` |
