import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "postEvent",
  initialState: null,
  reducers: {
    updatePost(state, action) {
        const { id, title } = action.payload
        state.push({ id, title })
    }
  }
});

export const { updatePost } = postSlice.actions;

export default postSlice.reducer;
