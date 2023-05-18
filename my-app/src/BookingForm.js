import React, { useState, useEffect } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  function fetchAPI(selectedDate) {
    // Replace with your actual API call to fetch available times
    return new Promise((resolve, reject) => {
      // Simulating API call with setTimeout
      setTimeout(() => {
        const availableTimes = ["12:00 PM", "1:00 PM", "7:00 PM"]; // Example available times
        resolve(availableTimes);
      }, 1000);
    });
  }

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
    if (date !== "") {
      updateTimes(date);
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>
      <label htmlFor="res-guests">Number of guests</label>
      <input type="number" id="res-guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
      <label htmlFor="res-occasion">Occasion</label>
      <select id="res-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="">Select</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <button type="submit">Submit Reservation</button>
    </form>
  );
}

export default BookingForm;