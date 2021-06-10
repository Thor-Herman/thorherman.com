import React from 'react';
import NavBar from './NavBar';

import "./App.css";
import LandingPage from '../pages/LandingPage';

const App = () => {
  return (
    <div className="App">
      <NavBar sectionNames={["Home", "About", "Experience", "Projects", "Contact"]}/>
      <LandingPage />
    </div>
  );
};

export default App;
