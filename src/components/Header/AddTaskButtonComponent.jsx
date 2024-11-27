import { styled } from 'styled-components';
import { palette } from "../../colors"; 
import { useTodoList } from '../UseTodoList';

export function AddTaskButton() {
    const { addTask } = useTodoList();
    return (
        <AddButton onClick={addTask}>+ Новая задача</AddButton>
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
`