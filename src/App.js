import React, { useState }  from 'react';
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

import './app.scss';

function App() {
  const [clicked, setClicked] = useState(['click 1'])

  return (
    <>
      <Header />
      <Projects />
      <Skills />
    </>
  )
}

export default App;
