import "./App.css";
import { React, useState, useEffect } from "react";
import { styled } from "styled-components";
import { Task } from "./components/TaskComponent.jsx";
import { Header } from "./components/HeaderComponent.jsx";
import { SearchBar } from "./components/SearchComponent.jsx";

export function App() {
  const [todosList, setTodoList] = useState([]);
  const [isSorted, setIsSorted] = useState(false)
  const updateList = () => getTasksList().then(setTodoList);

  const onAddTask = () => {
    const taskTitle = prompt("Опишите задачу");
    if (taskTitle) {
      const task = {
        id: Date.now(),
        title: taskTitle,
        complited: false,
      };
      fetch("http://localhost:3004/todos", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(updateList)
        .catch((error) => console.log("ne ok", error));
    }
  };

  async function onDeleteTask(taskId) {
    console.log(taskId);
    try {
      const rawResponse = await fetch(`http://localhost:3004/todos/${taskId}`, {
        method: "DELETE",
      });
      const response = await rawResponse.json();
      console.log(response);
      updateList();
    } catch (error) {
      return error;
    }
  }

  async function onSaveEditedTask(taskId, taskTitle) {
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

  const onSearch = (text) => {
    const searchedTasks = todosList.filter((item) => item.title.includes(text));
    setTodoList(searchedTasks);
  }

  const onCancelSearch = () => {
    updateList();
  }

  const onSortByTitle = () => {
    if (!isSorted) {
      const sortList = todosList.sort((a, b) => a.title > b.title ? 1 : -1);
      setIsSorted(true);
      setTodoList(sortList);
    } else {
      updateList();
      setIsSorted(false);
    }
  }

  useEffect(() => {
    updateList();
  }, []);

  return (
    <>
      <Header onAddTask={onAddTask} />
      <SearchBar onSearch={onSearch} onCancelSearch={onCancelSearch} onSortByTitle={onSortByTitle} isSorted={isSorted}/>
      <List>
        {todosList?.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            title={item.title}
            onDeleteTask={onDeleteTask}
            onSaveEditedTask={onSaveEditedTask}
          />
        ))
        }
      </List>
    </>
  );
}

const List = styled.ul`
  margin: auto;
  padding: 15px 10px;
  align-items: center;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;

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
