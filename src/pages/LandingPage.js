import './LandingPage.css';
import React from 'react';
import ScrollArrow from '../components/ScrollArrow';

const LandingPage = () => {
  return (
    <div className={'landing-page'}>
      <div className={'welcome-text'}>
        <h1>Hello</h1>
        <p>Welcome to my site</p>
      </div>
      <ScrollArrow elementIdToScrollTo="projects-page" duration={300} />
    </div>
  );
};

export default LandingPage;
