import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    currentTaskList: [],
  },
  reducers: {
    setTaskList(state, action) {
        state.currentTaskList = action.payload;
    },
    addTask(state, action) {
        state.currentTaskList.push(action.payload);
    },
    editTask(state, action) {
        const {taskId, newText} = action.payload;
        state.currentTaskList[taskId].title = newText;
    },
    deleteTask(state, action) {
        state.currentTaskList = state.currentTaskList.filter(task => task.id !== action.payload)
    }
  },
});
