import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import FlightSearch from '../pages/FlightSearch';
import FlightBooking from '../pages/FlightBooking';
import Confirmation from '../pages/Confirmation';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/flight-search">Search Flights</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/flight-search" element={<FlightSearch />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;