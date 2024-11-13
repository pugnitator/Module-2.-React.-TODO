import "./App.css";
import { React, useState, useEffect } from "react";

function App() {
  const [todosList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => setTodoList([...data]))
  }, []);

  return (
    <ul>
      {todosList.map((item) => <li key={item.id}>{item.title}</li>)}
    </ul>

  )
}

export default App;

// запрос перечня списка
// каждый элемент списка - дело
// поместить всё в app
