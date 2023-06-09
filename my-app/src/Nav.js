import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = () => {
  return (
        <nav className="container">
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/About">About</Link>
                </li>
                <li>
                <Link to="/Menu">Menu</Link>
                </li>
                <li>
                <Link to="/Reservations">Reservations</Link>
                </li>
                <li>
                <Link to="/OrderOnline">Order Online</Link>
                </li>
                <li>
                <Link to="/Login">Log In</Link>
                </li>
            </ul>
        </nav>
  );
};

export default Nav;