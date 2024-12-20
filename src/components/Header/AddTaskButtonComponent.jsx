import { styled } from "styled-components";
import { palette } from "../../colors";
import { useDispatch } from "react-redux";
import { addTask } from "../../reduxTK/asyncActions/addTask";

export function AddTaskButton() {
  const dispatch = useDispatch();
  const onClick = () => {
    const taskTitle = prompt("Опишите задачу");
    if (taskTitle) {
      const task = {
        id: Date.now().toString(),
        title: taskTitle,
        complited: false,
      };
      dispatch(addTask(task));
    }
  };

  return <AddButton onClick={onClick}>+ Новая задача</AddButton>;
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
    background-color: #ab8feb;
  }
`;
