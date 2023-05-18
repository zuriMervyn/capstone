import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './Banner';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutContainer from './AboutContainer';
import BookingForm from './BookingForm';
import './Main.css';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  const updateTimes = () => {
    // Logic to update availableTimes based on the selected date
    const updatedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    setAvailableTimes(updatedTimes);
  };

  const initializeTimes = () => {
    // Logic to initialize availableTimes
    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    setAvailableTimes(initialTimes);
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/Specials" element={<Specials />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<AboutContainer />} />
        <Route path="/Reservations" element={<BookingForm availableTimes={availableTimes} />} />
      </Routes>
    </main>
  );
};

export default Main;