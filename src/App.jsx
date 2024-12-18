import "./App.css";
import { React } from "react";
import { Header } from "./components/Header/HeaderComponent.jsx";
import { Routes, Route } from 'react-router-dom';
import { MainPage } from "./components/MainPage/MainPage.jsx";
import { TaskPage } from "./components/TaskPage/TaskPage.jsx";
import { ErrorPage } from "./components/ErrorPage.jsx";

export function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/task/:taskId' element={<TaskPage />}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </>
  );
}