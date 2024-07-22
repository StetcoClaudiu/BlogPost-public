import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  id: -1,
  username: "",
  first_name: "",
  last_name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleUser: (state, action) => {
      state.logged = action.payload.logged;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
    },
    resetUser: (state) => {
      state.logged = initialState.logged;
      state.id = initialState.id;
      state.username = initialState.username;
      state.first_name = initialState.first_name;
      state.last_name = initialState.last_name;
      state.email = initialState.email;
    },
  },
});

export const { toggleUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
