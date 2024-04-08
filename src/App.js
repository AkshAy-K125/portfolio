import React, { useEffect, useState } from 'react';
import './App.css';

import { Navbar, Intro, Contact, Footer, ParticleBg, ColorSpin, WovenStar, SpinOffCube } from './Components';
import { ContentHolder } from './container';


function App() {

  const componentNames = ['ColorSpin', 'WovenStar', 'SpinOffCube'];
  const selectedComponentName = componentNames[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

  const components = {
    ColorSpin,
    WovenStar,
    SpinOffCube
  };

  const ComponentToRender = components[selectedComponentName];



  const [initialLoadSet, setInitialLoadSet] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setInitialLoadSet(false), 3000);

    return () => {
      clearTimeout(timer1);
    };
  },

    []
  );

  return (
    <div className='App'>
      {
        initialLoadSet
          ?
          (<ComponentToRender />)
          :
          (<>
            <ParticleBg />
            < Navbar />
            < Intro />
            < ContentHolder />
            < Contact />
            <Footer />
          </>)
      }
    </div>
  )
}

export default App