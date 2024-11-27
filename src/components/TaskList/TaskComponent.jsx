import { React, useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { palette } from "../../colors"; 
import { TaskButtons } from "./TaskButtonsComponent";
import { useTodoList } from '../UseTodoList';


export function Task(props) {
  const { id, title } = props;
  const { saveEditedTask } = useTodoList();

  const [isEdited, setIsEdited] = useState(false);
  const [inputValue, setInputValue] = useState(title);
  const taskInputRef = useRef();

  useEffect(() => {
    if (isEdited && taskInputRef?.current?.disabled === false) {
      taskInputRef?.current?.focus();
    }
  }, [isEdited]);

  const onEditClick = () => {
    setIsEdited(true);
  };

  const onCancelClick = () => {
    setIsEdited(false);
  };

  const onSaveClick = () => {
    console.log("onSaveClick");
    saveEditedTask(id, inputValue);
    setIsEdited(false);
  };

  return (
    <ListItem>
      <TaskInfo>
        <TaskInput
          type="text"
          ref={taskInputRef}
          value={inputValue}
          disabled={!isEdited}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Id>{`id: ${id}`}</Id>
      </TaskInfo>
      <TaskButtons 
        onEditClick={onEditClick} 
        onSaveClick={onSaveClick} 
        onCancelClick={onCancelClick} 
        isEdited={isEdited}
      />
    </ListItem>
  );
}

const ListItem = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  width: 70%;
  min-width: 500px;
  padding: 5px 15px;
  background-color: ${palette.taskBackground};
  border-radius: 3px;
  &:hover {
    background-color: #EEE8FA;
  }
`;

const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Id = styled.p`
font-size: 10px;
color: #7c69aa;
`;

const TaskInput = styled.input`
  background-color: rgba(205, 214, 219, 0);
  border: none;
`;