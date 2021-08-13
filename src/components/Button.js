import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <a
      className={`button pointer-hover box-shadow bold flex justify-center align-center ${props.color} ${props.type}`}
      target="_blank"
      rel="noreferrer"
      href={props.link}
    >
      {props.text}
    </a>
  );
};

export default Button;
