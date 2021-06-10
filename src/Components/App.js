import React from 'react';
import NavBar from './NavBar';
import LandingPage from '../pages/LandingPage';
import ProjectsPage from '../pages/ProjectsPage';

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar sectionNames={["Home", "About", "Experience", "Projects", "Contact"]}/>
      <LandingPage />
      <ProjectsPage />
    </div>
  );
};

export default App;
