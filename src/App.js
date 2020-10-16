import React, { useState }  from 'react';
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'

import './app.scss';

function App() {
  return (
    <>
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App;
