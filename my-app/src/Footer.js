import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="container">
      <div>
        <h3>Contact Us</h3>
        <p>123 Main Street, City, Country</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/example">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com/example">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/example">Instagram</a>
          </li>
        </ul>
      </div>
      <div>
        <p>&copy; 2023 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;