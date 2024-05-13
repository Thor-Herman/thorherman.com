import './LandingSection.css';
import React from 'react';
import ScrollArrow from '../components/ScrollArrow';

const LandingSection = () => {
  return (
    <section className={'home-section'} id="home-section">
      <div className={'welcome-text'}>
        <h1 className="bold">Hello</h1>
        <p>Welcome to my site</p>
      </div>
      <ScrollArrow elementIdToScrollTo="projects-section" duration={300} />
    </section>
  );
};

export default LandingSection;
