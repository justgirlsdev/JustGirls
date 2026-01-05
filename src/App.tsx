import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FAQPage from './pages/FAQ';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/apply" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Home />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default App;
