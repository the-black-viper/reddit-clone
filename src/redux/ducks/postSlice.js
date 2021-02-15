import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {},
  reducers: {
    setPost(state, action) {
      const postData = action.payload;
      return { ...state, ...postData };
    }
  }
});

export const { setPost } = postSlice.actions;

export default postSlice.reducer;
