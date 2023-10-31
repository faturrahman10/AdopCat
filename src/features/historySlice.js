import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    }
  }
});

export const { addItem } = historySlice.actions;
export default historySlice.reducer;