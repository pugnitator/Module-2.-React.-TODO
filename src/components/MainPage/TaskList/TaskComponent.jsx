import { React, useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { palette } from "../../../colors";
import { TaskButtons } from "./TaskButtonsComponent";
import { useContext } from "react";
import { TodoListContext } from "../../../todoListContext";
import { StyledLink } from "../../../colors";
import Open from "./Open.svg";

export function Task(props) {
  const { id, title } = props;
  const todoListStore = useContext(TodoListContext);

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
    setInputValue(title);
  };

  const onDelete = () => {
    todoListStore.deleteTask(id);
    console.log("Удалили");
  };

  const onSaveClick = () => {
    todoListStore.saveEditedTask(id, inputValue);
    setIsEdited(false);
  };

  return (
    <ListItem>
      <StyledLink to={`task/${id}`}>
        <img src={Open} alt="open task" />
      </StyledLink>
      <TaskInfo>
        <TaskInput
          type="text"
          ref={taskInputRef}
          value={
            inputValue.length <= MAX_TASK_TITLE_LENGTH
              ? inputValue
              : `${inputValue.substring(0, MAX_TASK_TITLE_LENGTH)}...`
          }
          disabled={!isEdited}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Id>{`id: ${id}`}</Id>
      </TaskInfo>
      {/* <TaskButtons
        onDelete={onDelete}
        onEditClick={onEditClick}
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        isEdited={isEdited}
      /> */}
    </ListItem>
  );
}

const ListItem = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 15px;
  height: 50px;
  width: 70%;
  min-width: 500px;
  padding: 5px 15px;
  background-color: ${palette.taskBackground};
  border-radius: 3px;
  &:hover {
    background-color: #eee8fa;
  }
`;

const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Id = styled.p`
  font-size: 10px;
  color: #7c69aa;
`;

const TaskInput = styled.input`
  background-color: rgba(205, 214, 219, 0);
  border: none;
`;

const MAX_TASK_TITLE_LENGTH = 20;
