import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: false,
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    toggleOptions: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { toggleOptions } = optionsSlice.actions;

export default optionsSlice.reducer;
