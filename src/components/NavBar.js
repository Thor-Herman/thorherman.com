import React, { useState } from 'react';
import NavBarElement from './NavBarElement';
import './NavBar.css';

const NavBar = ({ sectionNames }) => {
  const [activeSection, setActiveSection] = useState(sectionNames[0]);

  const sectionElements = sectionNames.map((sectionName) => (
    <NavBarElement
      activeSection={activeSection}
      onClick={setActiveSection}
      sectionName={sectionName}
      key={sectionName}
    />
  ));

  return <ul className="navbar">{sectionElements}</ul>;
};

export default NavBar;
