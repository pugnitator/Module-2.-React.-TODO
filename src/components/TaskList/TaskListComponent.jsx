import { styled } from "styled-components";
import { Task } from "./TaskComponent.jsx";
import { useTodoList } from '../UseTodoList';

export function TaskList() {
  const { taskList } = useTodoList();

  return (
    <List>
      {taskList?.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          title={item.title}
        />
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
