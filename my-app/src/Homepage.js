import React from 'react';
import './App.css';

const Homepage = () => {
  return (
    <div>
    <h1>Welcome to Little Lemon Restaurant</h1>
    <p>Experience the vibrant flavors of Little Lemon Restaurant. We offer a delightful menu filled with fresh and healthy dishes infused with a touch of citrus. Join us for a unique dining experience.</p>
    
    <div>
      <h2>Specials of the Day</h2>
      <div>
        <img src="special1.jpg" alt="Special 1" />
        <h3>Special 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <img src="special2.jpg" alt="Special 2" />
        <h3>Special 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    
    <div>
      <h2>Customer Testimonials</h2>
      <div>
        <img src="customer1.jpg" alt="Customer 1" />
        <h3>John Doe</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <img src="customer2.jpg" alt="Customer 2" />
        <h3>Jane Smith</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    
    <div>
      <h2>About Little Lemon Chicago</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id leo eu ipsum vestibulum commodo. Duis ullamcorper diam eget turpis pretium, sed lobortis mi gravida.</p>
    </div>
    
    <div>
      <h2>Make a Reservation</h2>
      <p>Ready to experience our delicious dishes? Book your table now!</p>
      <button>Book Now</button>
    </div>
  </div>
);
};
 

export default Login;