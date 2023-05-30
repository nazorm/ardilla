import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { LandingPage } from './pages/LandingPage';
import './App.scss';
import 'antd/dist/reset.css';
import { InterestCalculator } from './pages/InterestCalculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}> </Route>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/interest-calculator" element={<InterestCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
