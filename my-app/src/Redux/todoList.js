import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  textList: [],
};

const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    changeValue(state, action) {
      state.textList = action.payload.textList;
    },
    toggleComplete(state, action) {
      state.textList.isCompleted = action.payload.isCompleted;
    },
  },
});

export const textListAction = todoList.actions;
export default todoList.reducer;
