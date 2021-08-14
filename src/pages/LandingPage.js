import React, { useRef } from 'react';

import NavBar from '../components/NavBar';
import LandingSection from '../sections/LandingSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

const LandingPage = () => {
  const sectionNames = ['Home', 'Projects', 'Contact'];
  return (
    <>
      <NavBar sectionNames={sectionNames} />
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default LandingPage;
