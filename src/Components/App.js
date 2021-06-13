import React from 'react';
import NavBar from './NavBar';
import LandingSection from '../sections/LandingSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar
        sectionNames={['Home', 'About', 'Experience', 'Projects', 'Contact']}
      />
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
