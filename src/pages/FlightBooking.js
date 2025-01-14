
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookingDetails } from '../store/flightSlice';
import { Link } from 'react-router-dom';

const FlightBooking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const selectedFlight = useSelector((state) => state.flight.selectedFlight);
  const dispatch = useDispatch();

  const handleBooking = () => {
    dispatch(setBookingDetails({ name, email, flight: selectedFlight }));
  };

  return (
    <div className="flight-booking_page">
      <h2>Flight Booking</h2>
      <div>
        <span>Flight: {selectedFlight.flight}</span>
        <span>Time: {selectedFlight.time}</span>
        <span>Price: {selectedFlight.price}</span>
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Link to="/confirmation" onClick={handleBooking}>
       <button> Confirm Booking </button> 
      </Link>
    </div>
  );
};

export default FlightBooking;