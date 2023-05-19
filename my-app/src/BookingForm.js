import React, { useState, useEffect } from "react";
import { fetchAPI } from './api';

function BookingForm({ submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  function initializeTimes() {
    const today = new Date();
    fetchAPI(today).then((times) => {
      setAvailableTimes(times);
    });
  }

  function updateTimes(selectedDate) {
    fetchAPI(selectedDate).then((times) => {
      setAvailableTimes(times);
    });
  }

  useEffect(() => {
    initializeTimes();
  }, []);

  useEffect(() => {
    if (date !== "") {
      updateTimes(date);
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion
    };
    submitForm(e, formData);
  };

  const isFormValid = date && time && guests && occasion;

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required aria-label="Choose date" />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required aria-label="Choose time">
        <option value="">Select</option>
        {availableTimes.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>

      <label htmlFor="res-guests">Number of guests</label>
      <input type="number" id="res-guests" value={guests} onChange={(e) => setGuests(e.target.value)} min={1} required aria-label="Number of guests" />

      <label htmlFor="res-occasion">Occasion</label>
      <select id="res-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required aria-label="Occasion">
        <option value="">Select</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid} aria-label="Submit Reservation">
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;