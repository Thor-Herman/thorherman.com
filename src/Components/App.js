import React from 'react';
import NavBar from './NavBar';

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar sectionNames={["Home", "About", "Experience", "Projects", "Contact"]}/>
    </div>
  );
};

export default App;
