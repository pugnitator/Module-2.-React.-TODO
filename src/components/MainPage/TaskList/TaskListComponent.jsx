import { styled } from "styled-components";
import { Task } from "./TaskComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../Loader.jsx";
import { useEffect } from "react";
import { fetchTaskList } from "../../../reduxTK/asyncActions/fetchTaskList.js";

export function TaskList() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchTaskList());
  }, []);

  const taskListStore = useSelector((state) => state.task);
  const { isLoaded, currentTaskList } = taskListStore;
  // console.log('taskListComponent', currentTaskList, isLoaded);

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