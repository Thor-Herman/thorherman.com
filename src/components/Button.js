import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className={'button pointer-hover ' + props.color}>{props.text}</button>
  );
};

export default Button;
