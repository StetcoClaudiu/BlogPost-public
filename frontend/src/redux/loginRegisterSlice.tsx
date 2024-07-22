import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  register: false,
};

export const loginRegisterSlice = createSlice({
  name: "loginRegister",
  initialState,
  reducers: {
    toggleLogin: (state, action) => {
      state.login = action.payload;
    },
    toggleRegister: (state, action) => {
      state.register = action.payload;
    },
  },
});

export const { toggleLogin, toggleRegister } = loginRegisterSlice.actions;

export default loginRegisterSlice.reducer;
