import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UploadPage from './pages/UploadPage';
import GamePage from './pages/GamePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/guess" element={<GamePage />} />
      </Routes>
    </Router>
  );
};

export default App;
