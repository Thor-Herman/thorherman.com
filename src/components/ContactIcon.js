import React from 'react';
import './ContactIcon.css';

const ContactIcon = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="contact-icon-container pointer-hover"
    >
      {props.children}
    </a>
  );
};

export default ContactIcon;
