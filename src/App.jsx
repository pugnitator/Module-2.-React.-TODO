import "./App.css";
import { React, useState, useEffect } from "react";
import { Task } from './components/TaskComponent.jsx';
import { styled } from 'styled-components';

export function App() {
  const [todosList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => setTodoList([...data]))
  }, []);

  return (
    <>
      <h1>Список дел</h1>
      <List>
      {todosList.map((item) => <Task key={item.id} id={item.id} title={item.title}/>)}
    </List>
    </>

  )
}

const List = styled.ul`
  margin: auto;
  padding: 0;
  align-items: center;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`

// запрос перечня списка
// каждый элемент списка - дело
// поместить всё в app
