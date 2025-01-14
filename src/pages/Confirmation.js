
import React from 'react';
import { useSelector } from 'react-redux';

const Confirmation = () => {
  const bookingDetails = useSelector((state) => state.flight.bookingDetails);

  return (
    <div className="confirmation_page">
      <h2>Booking Confirmation</h2>
      <div>
        <span>Name: {bookingDetails.name}</span>
        <span>Email: {bookingDetails.email}</span>
        <span>Flight: {bookingDetails.flight.flight}</span>
        <span>Time: {bookingDetails.flight.time}</span>
        <span>Price: {bookingDetails.flight.price}</span>
      </div>
    </div>
  );
};

export default Confirmation;