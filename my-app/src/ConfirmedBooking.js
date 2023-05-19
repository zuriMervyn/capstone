import React from "react";

const ConfirmedBooking = ({ date, time, guests, occasion }) => {
  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Your booking has been confirmed. The details of your booking are as follows:</p>
        <ul>
          <li>Date: {date}</li>
          <li>Time: {time}</li>
          <li>Number of guests: {guests}</li>
          <li>Occasion: {occasion}</li>
        </ul>
    </div>
  );
};

export default ConfirmedBooking;