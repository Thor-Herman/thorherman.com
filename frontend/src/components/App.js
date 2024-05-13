import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

import './App.css';
import UnityPlayer from './UnityPlayer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/play/:id">
          <UnityPlayer />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
