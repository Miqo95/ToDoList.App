import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Math.random(),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    editTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
