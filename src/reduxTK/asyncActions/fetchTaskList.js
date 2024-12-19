import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTaskList = createAsyncThunk(
  "task/fetchTaskList",
  async () => {
    const response = await fetch("http://localhost:3004/todos");
    return await response.json();
  },
);
