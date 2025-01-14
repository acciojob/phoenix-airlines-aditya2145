
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing_page">
    <h1>Welcome to Flight Booking App</h1>
    <Link to="/flight-search">SEARCH FLIGHTS HERE</Link>
  </div>
);

export default LandingPage;