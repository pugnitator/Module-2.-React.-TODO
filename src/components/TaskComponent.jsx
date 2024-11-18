import { React, useState, useRef, useEffect } from "react";
import { styled } from "styled-components";

export function Task(props) {
  const { id, title, onDeleteTask, onSaveEditedTask } = props;

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
    onSaveEditedTask(id, inputValue);
    setIsEdited(false);
  };

  const onDeleteClick = () => {
    console.log("onDeleteClick");
    onDeleteTask(id);
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

      <TaskButtons>
        <Button id={"edit"} onClick={onEditClick} isHidden={isEdited}>
          Изменить
        </Button>
        <Button id={"delete"} onClick={onDeleteClick} isHidden={isEdited}>
          Удалить
        </Button>
        <Button id={"save"} onClick={onSaveClick} isHidden={!isEdited}>
          Сохранить
        </Button>
        <Button id={"cancel"} onClick={onCancelClick} isHidden={!isEdited}>
          Отмена
        </Button>
      </TaskButtons>
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
  background-color: #e5daff;
  border-radius: 3px;
  &:hover {
    background-color: #ded4fa;
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

const TaskButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3px;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
`;
const TaskInput = styled.input`
  background-color: rgba(205, 214, 219, 0);
  border: none;
`;

const Button = styled.button`
  height: 25px;
  box-sizing: content-box;
  color: white;
  border: none;
  background-color: #7c69aa;
  border-radius: 2px;
  display: ${(prop) => (prop.isHidden === false ? "block" : "none")};
  &:hover {
    background-color: ${(prop) =>
      prop.id === "delete" ? "#B0204D" : "#D9A84E"};
  }
`;
