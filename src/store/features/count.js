import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// Slice
const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCount: (state, action) => {
      const { payload } = action;
      state.count = payload;
    },
  },
});

// Selectors
export const countSelector = (state) => state.count;

// Actions
export const { setCount } = countSlice.actions;

// Reducers
export default countSlice.reducer;
