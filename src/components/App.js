import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import client from '../api/sanityClient';
import LandingPage from '../pages/LandingPage';

import './App.css';
import ProjectModal from './ProjectModal';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/modal/:id">
          <div className="project-modal-bg">
            <ProjectModal />
          </div>
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
