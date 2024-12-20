import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteTask = createAsyncThunk("task/deleteTask", async (taskId) => {
  const response = await fetch(`http://localhost:3004/todos/${taskId}`, {
    method: "DELETE",
  });
  return await response.json();
});