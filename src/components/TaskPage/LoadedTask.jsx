import { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { TaskButtons } from "../MainPage/TaskList/TaskButtonsComponent";
import { useContext } from "react";
import { TodoListContext } from "../../todoListContext";
import { shortenTitle } from "../../shortenTitleFun";

export function LoadedTask(props) {
  const { id, title, complited } = props;

  const [inputValue, setInputValue] = useState(title);
  const [isEdited, setIsEdited] = useState(false);
  const taskInputRef = useRef();
  const todoListStore = useContext(TodoListContext);

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
  };

  const onSaveClick = () => {
    todoListStore.saveEditedTask(id, inputValue);
    setIsEdited(false);
  };

  return (
    <TaskContainer>
      <h3>Задача "{shortenTitle(title)}"</h3>
      <Task>
        <TaskInput
          type="text"
          ref={taskInputRef}
          value={inputValue}
          disabled={!isEdited}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>id: {id}</p>
        <p>
          Статус: {complited === false ? "Ожидает выполнения" : "Выполнена"}
        </p>
        <TaskButtons
          onDelete={onDelete}
          onEditClick={onEditClick}
          onSaveClick={onSaveClick}
          onCancelClick={onCancelClick}
          isEdited={isEdited}
        />
      </Task>
    </TaskContainer>
  );
};

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px;
`;

const Task = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const TaskInput = styled.input`
  background-color: rgba(205, 214, 219, 0);
  border: none;
`;