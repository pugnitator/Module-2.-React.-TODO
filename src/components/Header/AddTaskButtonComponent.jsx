import { styled } from 'styled-components';
import { palette } from "../../colors"; 
import { useContext } from 'react';
import { TodoListContext } from '../../todoListContext';

export function AddTaskButton() {
  const todoListStore = useContext(TodoListContext)
    return (
        <AddButton onClick={todoListStore.addTask}>+ Новая задача</AddButton>
    )
}

const AddButton = styled.button`
  margin: 0;
  padding: 10px;
  align-self: center;
  color: white;
  font-size: 16px;
  background-color: ${palette.headerBackground};
  border: 3px solid white;
  border-radius: 3px;

  &:hover {
    background-color: #AB8FEB;
  }
`;