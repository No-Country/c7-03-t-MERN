import { createSlice } from "@reduxjs/toolkit";

export const dataReservaSlice = createSlice({
  name: "dataReserva",
  initialState: null,
  reducers: {
    setDataReserva: (state, action) => action.payload
  },
});

export const { setDataReserva } = dataReservaSlice.actions;

export default dataReservaSlice.reducer;
