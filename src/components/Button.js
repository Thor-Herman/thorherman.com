import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className={'button pointer-hover ' + props.color}>
      <a href={props.link}>{props.text}</a>
    </button>
  );
};

export default Button;
