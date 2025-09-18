import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import { Navbar, Intro, Contact, Footer, ParticleBg, ColorSpin, WovenStar, SpinOffCube } from './Components';
import { ContentHolder } from './container';
import ProtectedNisr from './Components/quotations/ProtectedNisr';
import NisrQuote from './Components/quotations/NisrQuote818/NisrQuote';


// Home component for the main portfolio page
const Home = () => {
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
  }, []);

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
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotations" element={<Navigate to="/" replace />} />
        <Route path="/quotations/Nisr" element={<ProtectedNisr />} />
        <Route path="/quotations/NisrQuote818" element={<NisrQuote />} />
      </Routes>
    </Router>
  );
}

export default App