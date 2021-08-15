import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import client from '../api/sanityClient';
import LandingPage from '../pages/LandingPage';
import Unity, { UnityContent } from 'react-unity-webgl';

import './App.css';
import ProjectModal from './ProjectModal';

const App = () => {
  const unityContent = new UnityContent('/build/build.json', '/build/loader.js');
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/play">
          <Unity unityContent={unityContent} />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
