import { SearchBar } from "./Search/SearchComponent.jsx";
import { TaskList } from "./TaskList/TaskListComponent.jsx";

export function MainPage() {
  return (
    <>
      <SearchBar />
      <TaskList />
    </>
  );
}