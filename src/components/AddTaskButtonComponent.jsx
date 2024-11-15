import { styled } from 'styled-components'

export function AddTaskButton(props) {
    const { onClick } = props;
    return (
        <AddButton onClick={onClick}>Новая задача</AddButton>
    )
}

const AddButton = styled.button`
  margin: 0;
  padding: 10px;
  align-self: center;
  background-color: white;
  border: 2px solid #282a2e;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #60DB8B;
  }
`