import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/apply" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/legal" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
