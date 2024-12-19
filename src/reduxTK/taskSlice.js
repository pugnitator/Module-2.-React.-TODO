import { createSlice } from "@reduxjs/toolkit";
import { fetchTaskList } from "./asyncActions/fetchTaskList";
import { addTask } from "./asyncActions/addTask";
import { deleteTask } from "./asyncActions/deleteTask";
import { editTask } from "./asyncActions/editTask";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    currentTaskList: [],
    isLoaded: false,
    isUploaded: false,
  },

  reducers: {
    setTaskList(state, action) {
      state.currentTaskList = action.payload;
    },
    setIsListUploaded(state, action) {
      state.isUploaded = action.payload
    },
    addTask(state, action) {
      state.currentTaskList.push(action.payload);
    },
    editTask(state, action) {
      const { taskId, newText } = action.payload;
      const task = state.currentTaskList.find(item => item.id = taskId);
      task.title = newText;
    },
    deleteTask(state, action) {
      state.currentTaskList = state.currentTaskList.filter(
        (task) => task.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    //fetchTaskList
    builder
    .addCase(fetchTaskList.pending, (state) => {
      state.isLoaded = false;
    })
    .addCase(fetchTaskList.fulfilled, (state, action) => {
      state.currentTaskList = action.payload;
      state.isLoaded = true;
    })
    .addCase(fetchTaskList.rejected, (state, action) => {
      console.log(action.payload);
      state.isLoaded = false;
    });

    //addTask
    builder
    .addCase(addTask.fulfilled, (state, action) => {
      state.currentTaskList.push(action.payload);
    })
    .addCase(addTask.rejected, (action) => {
      console.log('addTaskError', action.payload);
    })

    //deleteTask
    .addCase(deleteTask.fulfilled, (state, action) => {
      state.currentTaskList = state.currentTaskList.filter(task => task.id !== action.payload);
    })
    .addCase(deleteTask.rejected, (action) => {
      console.log('deleteTaskError', action.payload);
    })

    //editTask
    .addCase(editTask.fulfilled, (state, action) => {
      const editedTask = action.payload;
      console.log('payload', editedTask);
      const taskIndex = state.currentTaskList.findIndex(item => item.id = editedTask.id);
      state.currentTaskList[taskIndex] = editedTask;      
    })
    .addCase(editTask.rejected, (action) => {
      console.log('editTaskError', action.payload);
    });
  },
});


export const taskSliceActions = taskSlice.actions;
export const taskReducer = taskSlice.reducer;