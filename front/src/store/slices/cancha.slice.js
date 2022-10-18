import { createSlice } from "@reduxjs/toolkit";

export const canchaModalSlice = createSlice({
  name: "canchasModal",
  initialState: null,
  reducers: {
    setCanchaMondal: (state, action) => action.payload
  },
});

export const { setCanchaMondal } = canchaModalSlice.actions;

export default canchaModalSlice.reducer;
