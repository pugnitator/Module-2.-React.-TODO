import "./App.css";
import { React, useState, useEffect } from "react";
import { styled } from "styled-components";
import { Task } from "./components/TaskComponent.jsx";
import { Header } from "./components/HeaderComponent.jsx";


export function App() {
  const [todosList, setTodoList] = useState([]);
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
        .catch(console.log("ne ok"));
    }
  };

  const onEditeTask = () => {};

  useEffect(() => {
    updateList();
  }, []);

  return (
    <>
      <Header onAddTask={onAddTask}/>
      <List>
        {todosList?.map((item) => (
          <Task key={item.id} id={item.id} title={item.title} />
        ))}
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

function getTasksList() {
  return fetch("http://localhost:3004/todos")
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
