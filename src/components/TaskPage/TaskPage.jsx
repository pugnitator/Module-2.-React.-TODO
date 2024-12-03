import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TodoListContext } from "../../todoListContext";
import { TaskButtons } from "../MainPage/TaskList/TaskButtonsComponent";

export function TaskPage() {
  const params = useParams();
  const taskId = params.taskId;
  const todoListStore = useContext(TodoListContext);
//   console.log(todoListStore)
  const taskList = todoListStore.taskList


  if (taskList.length === 0) {
    return (
        <p>Идет загрузка</p>
    )
  } else {
    console.log('готовый список', taskList, );
    const currentTask = taskList.find((task) => {
        console.log(task.id === taskId, task.id, taskId)
        return task.id === taskId
    });
    console.log('текущая задача', currentTask);

    const {title, complited } = currentTask;

      return (
        <Task>
            <h3>{title}</h3>
            <div>
                
                <TaskButtons/>
            </div>
          <p>id: {taskId}</p>
          <p>Статус: {complited === false ? "Ожидает выполнения" : "Выполнена"}</p>
        </Task>
      );
  }
}

const Task = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
