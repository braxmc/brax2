import React from 'react';
import './App.css';

import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import TopButton from './components/topbutton/TopButton';

const App = () => {

  return (
    <>
      <TopButton />
      <Home />
      <Portfolio />
      <Resume />
      <About />
      <Contact />
    </>
  );
}

export default App;
