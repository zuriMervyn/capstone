import React from 'react';
import './App.css';
import Banner from './Banner';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutContainer from './AboutContainer';
import './Main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <main className="container">
        <Router>
        <Routes>
            <Route path="banner" element={<Banner />} />
            <Route path="specials" element={<Specials />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="aboutcontainer" element={<AboutContainer />} />
        </Routes>
        </Router>
    </main>
    
  );
};

export default Main;