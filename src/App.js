import React from 'react';
import './App.css';

import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const App = () => {

  return (
    <>
      <Home />
      <Portfolio />
      <Resume />
      <About />
      <Contact />
    </>
  );
}

export default App;
