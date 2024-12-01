import { createSlice } from "@reduxjs/toolkit";
import placeholder from "../assets/profile_placeholder.png";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    logged_in: false,
    first_name: null,
    last_name: null,
    email: null,
    phone_number: null,
    profile_pic: placeholder,
    role: null,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.phone_number = action.payload.phone_number;
      state.role = action.payload.role;
      state.logged_in = true;
      if (action.payload.profile_pic)
        state.profile_pic = action.payload.profile_pic;
    },
    logout(state) {
      state.token = null;
      state.first_name = null;
      state.last_name = null;
      state.email = null;
      state.phone_number = null;
      state.role = null;
      state.logged_in = false;
      state.profile_pic = placeholder;
    },
  },
});
export const userActions = userSlice.actions;
