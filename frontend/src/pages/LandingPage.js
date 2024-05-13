import React, { useRef } from 'react';

import NavBar from '../components/NavBar';
import LandingSection from '../sections/LandingSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';
import { Route } from 'react-router-dom';
import ProjectModal from 'components/ProjectModal';

const LandingPage = () => {
  const sectionNames = ['Home', 'Projects', 'Contact'];
  return (
    <>
      <NavBar sectionNames={sectionNames} />
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
      <Route path="/modal/:id">
        <div className="project-modal-bg">
          <ProjectModal />
        </div>
      </Route>
    </>
  );
};

export default LandingPage;
