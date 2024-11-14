import "./App.css";
import { React, useState, useEffect } from "react";
import { styled } from 'styled-components';
import { Task } from './components/TaskComponent.jsx';
import { AddTaskButton } from "./components/AddTaskButtonComponent.jsx";

export function App() {
  const [todosList, setTodoList] = useState([]);
  const updateList = () => getTasksList().then(setTodoList)

  useEffect(() => {
    updateList();
  }, []);

  return (
    <>
      <header>
        <h1>Список задач</h1>
        <AddTaskButton updateList={updateList}/>
      </header>  
      <List>
        {todosList?.map((item) => <Task key={item.id} id={item.id} title={item.title}/>)}
      </List>
    </>
  )
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
`
function getTasksList () {
    return fetch("http://localhost:3004/todos")
    .then((response) => response.json())
    .catch(error => {console.log(error)});
}