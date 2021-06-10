import './LandingPage.css';
import React from 'react';
import ScrollArrow from '../components/ScrollArrow';

const LandingPage = () => {
  return (
    <div className={'landing-page'}>
      <div className={'welcome-text quicksand'}>
        <h1>Hello</h1>
        <p>Welcome to my site</p>
      </div>
      <ScrollArrow />
    </div>
  );
};

export default LandingPage;
