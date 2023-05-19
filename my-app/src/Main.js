import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './Banner';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutContainer from './AboutContainer';
import BookingForm from './BookingForm';
import './Main.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from './api';

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookingData, setBookingData] = useState(null); // Add state for booking data
  const navigate = useNavigate();

  const updateTimes = (selectedDate) => {
    // Logic to update availableTimes based on the selected date
    fetchAPI(selectedDate).then((times) => {
      setAvailableTimes(times);
    });
  };

  const initializeTimes = () => {
    // Logic to initialize availableTimes
    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    setAvailableTimes(initialTimes);
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  function submitForm(e, formData) {
    e.preventDefault();

    submitAPI(formData).then((success) => {
      if (success) {
        setBookingData(formData); // Store the booking data in state
        navigate("/ConfirmedBooking");
      }
    });
  }

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/Specials" element={<Specials />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<AboutContainer />} />
        <Route
          path="/Reservations"
          element={<BookingForm availableTimes={availableTimes} submitForm={submitForm} />}
        />
        <Route
          path="/ConfirmedBooking"
          element={<ConfirmedBooking {...bookingData} />} // Pass bookingData as props
        />
      </Routes>
    </main>
  );
};

export default Main;
