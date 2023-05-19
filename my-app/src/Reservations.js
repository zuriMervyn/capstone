import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import BookingForm from "./BookingForm";



function App() {
  return (
    <div>
      <h1>Little Lemon Web App</h1>
      <BookingForm />
    </div>
  );
}

export default App;