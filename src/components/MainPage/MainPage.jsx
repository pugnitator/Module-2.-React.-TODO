import { SearchBar } from "./Search/SearchComponent.jsx";
import { TaskList } from './TaskList/TaskListComponent.jsx';
import { BrowserRouter } from 'react-router-dom';

export function MainPage() {

    return (
        <>
            <SearchBar />
            <TaskList />
        </>
    )
}