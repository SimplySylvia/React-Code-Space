import React from 'react';

const copyToClipboard = content => {
  const textField = document.createElement('textarea');
  textField.innerHTML = content;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
};

const handleClick = props => {
  props.setCopied(true);
  copyToClipboard(props.content);
};

const Copy = props => {
  return (
    <i className='code__copy' onClick={() => handleClick(props)}>
      <svg
        data-v-023f9c29=''
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path data-v-023f9c29='' fill='none' d='M0 0h24v24H0z'></path>
        <path
          data-v-023f9c29=''
          fill='#E2E2E4'
          d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z'
        ></path>
      </svg>
    </i>
  );
};

export default Copy;
