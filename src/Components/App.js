import React from 'react';
import NavBar from './NavBar';
import LandingPage from '../pages/LandingPage';
import ProjectsPage from '../pages/ProjectsPage';

import "./App.css";
import ContactPage from '../pages/ContactPage';

const App = () => {
  return (
    <div className="App">
      <NavBar sectionNames={["Home", "About", "Experience", "Projects", "Contact"]}/>
      <LandingPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};

export default App;
