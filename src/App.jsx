import "./App.css";
import { React } from "react";
import { Header } from "./components/Header/HeaderComponent.jsx";
import { SearchBar } from "./components/Search/SearchComponent.jsx";
import { TaskList } from "./components/TaskList/TaskListComponent.jsx";

/*TODO:
1. debouns
2. firebase
3. why two GET requests in a row
*/


export function App() {

  return (
    <>
      <Header />
      <SearchBar />
      <TaskList />
    </>
  );

}