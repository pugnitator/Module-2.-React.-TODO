import { createAsyncThunk } from "@reduxjs/toolkit";

export const editTask = createAsyncThunk("task/editTask", async (task) => {
  const response = await fetch(`http://localhost:3004/todos/${+task.id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
});