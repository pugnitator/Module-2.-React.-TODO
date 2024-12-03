import "./App.css";
import { React } from "react";
import { Header } from "./components/Header/HeaderComponent.jsx";
import { TodoListContext } from "./todoListContext.js";
import { useTodoList } from "./components/UseTodoList.js";
import { Routes, Route } from 'react-router-dom';
import { MainPage } from "./components/MainPage/MainPage.jsx";
import { TaskPage } from "./components/TaskPage/TaskPage.jsx";
import { ErrorPage } from "./components/ErrorPage.jsx";

export function App() {
  const todoListStore = useTodoList();
  return (
    <TodoListContext.Provider value={todoListStore}>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/task/:taskId' element={<TaskPage />}/>
          <Route path='*' element={ErrorPage} />
        </Routes>
    </TodoListContext.Provider>
  );
}