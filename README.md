# React Code Block Component

- uses jetbrains mono for readability

## Code

Code is the base import. It will recieve the below compound components to for formatting.

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
| shadow   | adds a border radius to the code space              | default is true                    | `<Code rounded>`                    |

## Code Header

### Header props

- none

## Code Body

### props

- content
- numbered
- start
- highlight
- collapsable
- collapsableText
- copy
- blur

## Code Doc

### props

- none

## Code Divider

### props

- dots
