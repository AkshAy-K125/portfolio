import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import { Navbar, Intro, Contact, Footer, ParticleBg, ColorSpin, WovenStar, SpinOffCube, Auth, Nisr, NisrQuote818, NisrQuote818TimeLine, NisrQuote826, NisrQuote826TimeLine, NisrQuote837, NisrQuote818FinalReport } from './Components';
import { ContentHolder } from './container';


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
        <Route path="/quotations/Nisr" element={
          <Auth
            authKey="nisr_quotation_auth"
            redirectPath="/"
            password={process.env.REACT_APP_NISR_PASSWORD}
          >
            <Nisr />
          </Auth>
        } />
        <Route path="/quotations/NisrQuote818" element={
          <Auth
            authKey="nisr_quote_818_auth"
            redirectPath="/"
            password={process.env.REACT_APP_NISR_QUOTE_818_PASSWORD}
          >
            <NisrQuote818 />
          </Auth>
        } />
        <Route path="/quotations/NisrQuote818TimeLine" element={
          <Auth
            authKey="nisr_quote_818_timeline_auth"
            redirectPath="/"
            password={process.env.REACT_APP_NISR_QUOTE_818_TIMELINE_PASSWORD}
          >
            <NisrQuote818TimeLine />
          </Auth>
        } />
        <Route path="/quotations/NisrQuote826" element={
          <Auth 
            authKey="nisr_quote_826_auth" 
            redirectPath="/"
            password={process.env.REACT_APP_NISR_QUOTE_826_PASSWORD}
          >
            <NisrQuote826 />
          </Auth>
        } />
        <Route path="/quotations/NisrQuote826TimeLine" element={
          <Auth
            authKey="nisr_quote_826_timeline_auth"
            redirectPath="/"
            password={process.env.REACT_APP_NISR_QUOTE_826_TIMELINE_PASSWORD}
          >
            <NisrQuote826TimeLine />
          </Auth>
        } />
        <Route path="/quotations/NisrQuote837" element={
          <Auth 
            authKey="nisr_quote_837_auth" 
            redirectPath="/"
            password={process.env.REACT_APP_NISR_QUOTE_837_PASSWORD}
          >
            <NisrQuote837 />
          </Auth>
        } />
        <Route path="/quotations/NisrQuote818FinalReport" element={
          <Auth
            authKey="nisr_quote_818_final_report_auth"
            redirectPath="/"
            password={process.env.REACT_APP_NISR_QUOTE_818_FINAL_REPORT_PASSWORD}
          >
            <NisrQuote818FinalReport />
          </Auth>
        } />
      </Routes>
    </Router>
  );
}

export default App