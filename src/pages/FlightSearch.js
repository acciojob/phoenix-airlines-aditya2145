
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults, selectFlight } from '../store/flightSlice';
import { Link } from 'react-router-dom';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('one-way');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.flight.searchResults);

  const handleSearch = () => {
    // Simulate search results
    const results = [
      { id: 1, flight: 'FL123', time: '10:00 AM', price: 100 },
      { id: 2, flight: 'FL456', time: '2:00 PM', price: 150 },
    ];
    dispatch(setSearchResults(results));
  };

  return (
    <div className="flight-search_page">
      <h2>Flight Search</h2>
      <div>
        <label>
          <input
            type="radio"
            value="one-way"
            checked={tripType === 'one-way'}
            onChange={(e) => setTripType(e.target.value)}
          />
          One-way
        </label>
        <label>
          <input
            type="radio"
            value="round-trip"
            checked={tripType === 'round-trip'}
            onChange={(e) => setTripType(e.target.value)}
          />
          Round-trip
        </label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map((result) => (
          <div key={result.id} className="book-flight">
            <span>{result.flight}</span>
            <span>{result.time}</span>
            <span>{result.price}</span>
            <Link to="/flight-booking" onClick={() => dispatch(selectFlight(result))}>
              Book
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSearch;