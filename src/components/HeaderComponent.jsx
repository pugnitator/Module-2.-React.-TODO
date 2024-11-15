import { styled } from "styled-components";
import { AddTaskButton } from "./AddTaskButtonComponent"

export function Header(props) {
  const { onAddTask } = props;
  return (
    <header>
      <HeaderItemsConteiner>
        <h1>Список задач</h1>
        <AddTaskButton onClick={onAddTask} />
      </HeaderItemsConteiner>
    </header>
  );
}

const HeaderItemsConteiner = styled.div`
  display: flex;
  margin: auto;
  width: 70%;
  min-width: 500px;
  justify-content: space-between;
  align-items: baseline;
  background-color: #b99bff;
`;
