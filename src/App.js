import React, { useState }  from 'react';
import Header from './Components/Header/Header'
import './app.scss';

function App() {
  const [clicked, setClicked] = useState(['click 1'])
  return (
    <Header />
  )
}

export default App;
