import { styled } from "styled-components";
import { palette } from "../colors";

export function TaskButtons(props) {
  const { onEditClick, onDeleteClick, onSaveClick, onCancelClick, isEdited } = props;

  return (
    <TaskButtonsContainer>
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
    </TaskButtonsContainer>
  );
}

const TaskButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3px;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
`;

const Button = styled.button`
  height: 25px;
  box-sizing: content-box;
  padding: 3px 10px;
  color: #4a3f6b;
  border: none;
  background-color: ${palette.taskButtonBackground};
  border-radius: 4px;
  display: ${(prop) => (prop.isHidden === false ? "block" : "none")};
  &:hover {
    color: #4a3f6b;
    background-color: ${(prop) =>
      prop.id === "delete" ? "#ff9999" : 
      prop.id === "edit" ? "#ffeeba" : 
      prop.id === "save" ? "#b2f2bb" : "#ffeeba"};
  }
`;
