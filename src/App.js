import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutPage from './page/AboutPage';
import HomePage from './page/HomePage';

function App() {

  const metaAbout = "About | Elite"
  const metaHome = "Home| Elite"




  const ScrollTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }, [location.pathname]);
    return null;
  };


  return (
    <>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage metaHome={metaHome} />} />
        <Route path="/about-us" element={<AboutPage metaAbout={metaAbout} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
