import React from 'react';
import ContactIcon from '../components/ContactIcon';

import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Gmail } from '../assets/gmail.svg';
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg';

import './ContactPage.css';

const ContactPage = () => {
  return (
    <section className="contact-page">
      <p className="section-title">Contact</p>
      <div className="icons-container">
        <ContactIcon link="https://github.com/Thor-Herman">
          <Github />
        </ContactIcon>
        <ContactIcon link="mailTo:thorherman.eggelen@gmail.com">
          <Gmail />
        </ContactIcon>
        <ContactIcon link="https://www.linkedin.com/in/thor-herman-van-eggelen-013504184/">
          <LinkedIn />
        </ContactIcon>
      </div>
    </section>
  );
};

export default ContactPage;
