import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/">
          <LandingPage />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
