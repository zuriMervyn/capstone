import React from 'react';
import './App.css';
import logo from './logo.png';


const Header = () => {
  return (
  <header className="container">
    <img src={logo} alt="Little Lemon Logo"/>
  </header>
  );
};

export default Header;