import { styled } from "styled-components";
import { Task } from "./TaskComponent.jsx";
import { useContext } from "react";
import { TodoListContext } from "../../../todoListContext.js";

export function TaskList() {
  const todoListStore = useContext(TodoListContext);
  console.log(todoListStore.taskList);

  return (
    <List>
      {todoListStore.taskList?.map((item) => (
            <Task
              task={item}
              key={item.id}
              id={item.id}
              title={item.title}
            ></Task>
      ))}
    </List>
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
