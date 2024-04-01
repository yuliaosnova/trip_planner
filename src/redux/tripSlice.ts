import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import trips from "../assets/trips.json";

const initialState: Trip[] = trips;

export interface Trip {
	id: number;
	city: string,
	region: string,
	image: string,
	startDate: string,
	endDate: string
 }

const tripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    addTrip(state, action: PayloadAction<Trip>) {
      return [ ...state, action.payload];
    },
  },
});

export const tripsReducer = tripSlice.reducer;
export const { addTrip } = tripSlice.actions;
