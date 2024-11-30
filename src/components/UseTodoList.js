import { useState, useEffect } from "react";
import { getTasksList } from "../APIs/getTaskList";
import { addTaskToServer } from "../APIs/addTaskToServer";
import { deleteTaskFromServer } from "../APIs/deleteTaskFromServer";
import { editTaskOnServer } from "../APIs/editTaskOnServer";

export const useTodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  let listBeforeSort = [...taskList];

  useEffect(() => {
    console.log(taskList.length);
    getTasksList().then(setTaskList);
  }, []);

  useEffect(() => {
    console.log("taskList обновился:", taskList);
  }, [taskList]);

  const searchTask = (text) => {
    const searchedTasks = taskList.filter((item) => item.title.includes(text));
    setTaskList(searchedTasks);
  };

  const cancelSearchTask = async () => {
    getTasksList().then(setTaskList);
  };

  const sortTasksByTitle = async () => {
    if (!isSorted) {
      const sortList = [...taskList].sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
      setIsSorted(true);
      setTaskList(sortList);
    } else {
      setIsSorted(false);
      setTaskList(listBeforeSort);
    }
  };

  async function addTask() {
    const taskTitle = prompt("Опишите задачу");
    if (taskTitle) {
      try {
        const task = {
          id: Date.now(),
          title: taskTitle,
          complited: false,
        };
        const isSuccess = await addTaskToServer(task);
        if (isSuccess) setTaskList([...taskList, task]);
      } catch (error) {
        console.log("ne ok", error);
      }
    }
  }

  async function deleteTask(task, taskId) {
    try {
      const isSuccess = await deleteTaskFromServer(taskId);
      if (isSuccess) {
        // const deleteTaskIndex = taskList.indexOf(task);
        setTaskList(taskList.filter(task => task.id !== taskId));
      }
    } catch (error) {
      console.log("ошибка удаления", error);
    }
  }

  async function saveEditedTask(taskId, taskTitle) {
    const task = {
      id: taskId,
      title: taskTitle,
      complited: false,
    };

    try {
      await editTaskOnServer(task, taskId);
    } catch (error) {
      console.log(error)
    }
  }

  return {
    taskList,
    isSorted,
    setTaskList,
    addTask,
    deleteTask,
    saveEditedTask,
    searchTask,
    cancelSearchTask,
    sortTasksByTitle,
  };
};
