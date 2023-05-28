import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { LandingPage } from './pages/LandingPage';
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}> </Route>
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
