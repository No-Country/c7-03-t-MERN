import { createSlice } from "@reduxjs/toolkit";

export const canchaReservaSlice = createSlice({
  name: "canchaReserva",
  initialState: null,
  reducers: {
    setCanchaReserva: (state, action) => action.payload
  },
});

export const { setCanchaReserva } = canchaReservaSlice.actions;

export default canchaReservaSlice.reducer;
