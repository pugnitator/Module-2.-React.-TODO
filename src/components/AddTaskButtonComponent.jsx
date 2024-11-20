import { styled } from 'styled-components';
import { palette } from "../colors"; 

export function AddTaskButton(props) {
    const { onClick } = props;
    return (
        <AddButton onClick={onClick}>+ Новая задача</AddButton>
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