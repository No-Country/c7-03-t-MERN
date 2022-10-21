import { createSlice } from "@reduxjs/toolkit";

export const donSlice = createSlice({
  name: "don",
  initialState: null,
  reducers: {
    setDon: (state, action) => action.payload
  },
});

export const { setDon } = donSlice.actions;

export default donSlice.reducer;
