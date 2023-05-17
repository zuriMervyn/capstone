import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Banner from './Banner';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutContainer from './AboutContainer';
import './App.css'; // Import the App.css file\


const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Main/>
      <Banner/>
      <Specials/>
      <Testimonials/>
      <AboutContainer/>
      <Footer/>
    </div>
  );
};

export default App;