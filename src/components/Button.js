import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className={`button pointer-hover box-shadow ${props.color} ${props.type}`}>
      <a target="_blank" rel="noreferrer" href={props.link}>{props.text}</a>
    </button>
  );
};

export default Button;
