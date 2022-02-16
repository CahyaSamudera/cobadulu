import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Document from './components/Document/Document';
import Contact from './components/Contact/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Document />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
