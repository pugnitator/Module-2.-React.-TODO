import "./App.css";
import { React } from "react";
import { Header } from "./components/Header/HeaderComponent.jsx";
import { SearchBar } from "./components/Search/SearchComponent.jsx";
import { TaskList } from "./components/TaskList/TaskListComponent.jsx";
import { TodoListContext } from "./todoListContext.js";
import { useTodoList } from "./components/UseTodoList.js";

/*TODO:
1. fix serchBar 
2. firebase
*/

export function App() {
  const todoListStore = useTodoList();
  return (
    <TodoListContext.Provider value={todoListStore}
    >
      <>
        <Header />
        <SearchBar />
        <TaskList />
      </>
    </TodoListContext.Provider>
  );
}