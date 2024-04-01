import { RootState } from "./store";

export const getTrips = (state: RootState) => state.trips;
export const getSelectedTripId = (state: RootState) => state.selectedTrip;
export const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const getUser = (state: RootState) => state.user.login;
