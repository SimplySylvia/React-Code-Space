import React from 'react';
import './Split.css';

const generateChildren = props => {
  const children = [];
  console.log(props);
  let total;
  total =
    props.total || typeof props.children === 'object'
      ? 1
      : props.children.length;
  console.log(total);
  for (let i = 0; i < total; i++) {
    const child = props.children[i];

    if (!child.type) children.push(child);

    if (child.type.displayName === 'Body') {
      children.push(
        React.cloneElement(child, {
          theme: props.theme,
          language: props.language
        })
      );
    }
  }
  return children;
};

const Split = props => {
  return <div className='code__split stackable'>{generateChildren(props)}</div>;
};

Split.displayName = 'Split';

export default Split;
