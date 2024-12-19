import { useState, useEffect } from "react";
import { getTasksList } from "../APIs/getTaskList";
import { deleteTaskFromServer } from "../APIs/deleteTaskFromServer";
import { editTaskOnServer } from "../APIs/editTaskOnServer";

export const useTodoList = () => {
  const [search, setSearch] = useState('')
  const [taskList, setTaskList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  // useEffect(() => {
  //   getTasksList().then(setTaskList);
  // }, []);

  const searchTask = (text) => {
    setSearch(text.toLowerCase());
  };

  const cancelSearchTask = () => {
    setSearch(false);
  };

  const applyFilters = () => {
    const searchedList = search? taskList.filter((item) => item.title.toLowerCase().includes(search)) : taskList
    return isSorted? [...searchedList].sort((a, b) => a.title > b.title ? 1 : -1) : searchedList
  }

  const sortTasksByTitle = () => {
    setIsSorted(!isSorted)
  };

  // async function deleteTask(taskId) {
  //   try {
  //     const isSuccess = await deleteTaskFromServer(taskId);
  //     if (isSuccess) {
  //       setTaskList(taskList.filter(task => task.id !== taskId));
  //     }
  //   } catch (error) {
  //     console.log("ошибка удаления", error);
  //   }
  // }

  // async function saveEditedTask(taskId, taskTitle) {
  //   const task = {
  //     id: taskId,
  //     title: taskTitle,
  //     complited: false,
  //   };

  //   try {
  //     await editTaskOnServer(task, taskId);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return {
    taskList : applyFilters(),
    isSorted,
    searchTask,
    cancelSearchTask,
    sortTasksByTitle,
  };
};
