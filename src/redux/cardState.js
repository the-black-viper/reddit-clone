import { createSlice } from "@reduxjs/toolkit";

const clickSlice = createSlice({
  name: "clickEvent",
  initialState: true,
  reducers: {
    clickTrigger: (state) => !state
  }
});

export const { clickTrigger } = clickSlice.actions;

export default clickSlice.reducer;
