import React from 'react';

import NavBar from '../components/NavBar';
import LandingSection from '../sections/LandingSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

const LandingPage = () => {
  return (
    <>
      <NavBar
        sectionNames={['Home', 'Projects', 'Contact']}
      />
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default LandingPage;
