import { useState, useEffect } from "react";

export const useTodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const updateList = async () => {
    console.log("update");
    return getTasksList().then((res) => {
      console.log(res);
      setTaskList(res);
    });
  };

  useEffect(() => {
    updateList();
  }, []);

  const searchTask = (text) => {
    const searchedTasks = taskList.filter((item) => item.title.includes(text));
    setTaskList(searchedTasks);
  };

  const cancelSearchTask = () => {
    updateList();
  };

  const sortTasksByTitle = () => {
    if (!isSorted) {
      const sortList = taskList.sort((a, b) => (a.title > b.title ? 1 : -1));
      setIsSorted(true);
      setTaskList(sortList);
    } else {
      updateList();
      setIsSorted(false);
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

        const rawResponse = await fetch("http://localhost:3004/todos", {
          method: "POST",
          body: JSON.stringify(task),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        const response = await rawResponse.json();
        console.log(response);
        await updateList();
      } catch (error) {
        console.log("ne ok", error);
      }
    }
  }

  async function deleteTask(taskId) {
    console.log("task id", taskId);
    try {
      const rawResponse = await fetch(
        `http://localhost:3004/todos/${+taskId}`,
        {
          method: "DELETE",
        }
      );
      // const response = await rawResponse.json();
      console.log(rawResponse);
      await updateList();
      console.log(taskList);
    } catch (error) {
      console.log("ошибка удаления", error);
      return error;
    }
  }

  async function saveEditedTask(taskId, taskTitle) {
    const task = {
      id: taskId,
      title: taskTitle,
      complited: false,
    };

    try {
      const rawResponse = await fetch(`http://localhost:3004/todos/${taskId}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const response = await rawResponse.json();
      console.log(response);
    } catch (error) {
      return error;
    }
  }

  async function getTasksList() {
    let result;
    try {
      const response = await fetch("http://localhost:3004/todos");
      result = await response.json();
    } catch (error) {
      result = error;
    }
    return result;
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
