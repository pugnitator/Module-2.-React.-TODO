import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTask = createAsyncThunk("task/addTask", async (task) => {
  const response = await fetch("http://localhost:3004/todos", {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
});
