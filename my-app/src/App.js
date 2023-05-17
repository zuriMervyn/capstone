import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css'; // Import the App.css file

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;