import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { LandingPage } from './pages/LandingPage';
import './App.scss';
import 'antd/dist/reset.css';
import { InterestCalculator } from './pages/InterestCalculator';
import { CareersPage } from './pages/CareersPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}> </Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/interest/calculator" element={<InterestCalculator />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </div>
  );
}
//CareersPage
export default App;
