import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  login: string;
  uid: string;
  isLoggedIn: boolean;
}

const initialState: User = {
  login: "",
  uid: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<{ login: string; uid: string }>) {
      state.login = action.payload.login;
      state.uid = action.payload.uid;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = "";
      state.uid = "";
      state.isLoggedIn = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { logIn, logOut } = userSlice.actions;
