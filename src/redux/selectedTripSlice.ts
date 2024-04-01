import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const selectedTripSlice = createSlice({
  name: "selectedTrip",
  initialState: 1,
  reducers: {
    idChange(state, action: PayloadAction<number>) {
      return (state = action.payload);
    },
  },
});

export const selectedTripReducer = selectedTripSlice.reducer;
export const { idChange } = selectedTripSlice.actions;
