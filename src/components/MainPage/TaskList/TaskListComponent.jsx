import { styled } from "styled-components";
import { Task } from "./TaskComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../Loader.jsx";
import { useEffect } from "react";
import { fetchTaskList } from "../../../reduxTK/asyncActions/fetchTaskList.js";
import { applyFilters } from "../../helpFun.js";

export function TaskList() {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.task.isLoaded);
  const isSorted = useSelector((state) => state.task.isSorted);
  const searchQuery = useSelector((state) => state.task.searchQuery);
  const currentTaskList = useSelector((state) => {
    return applyFilters(isSorted, searchQuery, state.task.currentTaskList);
  });

  useEffect(() => {
    console.log("useEffect");
    if (!isLoaded)dispatch(fetchTaskList());
  }, []);

  console.log('taskListComponent', currentTaskList);

  return isLoaded ? (
    <List>
      {currentTaskList.map((item) => (
        <Task task={item} key={item.id} id={item.id} title={item.title} />
      ))}
    </List>
  ) : (
    <Loader />
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