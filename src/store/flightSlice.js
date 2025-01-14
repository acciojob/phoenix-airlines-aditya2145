// src/store/flightSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: [],
  selectedFlight: null,
  bookingDetails: {},
  confirmation: null,
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    selectFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    setConfirmation: (state, action) => {
      state.confirmation = action.payload;
    },
  },
});

export const { setSearchResults, selectFlight, setBookingDetails, setConfirmation } = flightSlice.actions;
export default flightSlice.reducer;