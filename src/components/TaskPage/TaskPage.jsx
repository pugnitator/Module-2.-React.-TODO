import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TodoListContext } from "../../todoListContext";
import { NotLoadedTask } from "./NotLoadedTask";
import { LoadedTask } from "./LoadedTask";
import styled from "styled-components";
import { GoBackButton } from "./GoBackButton";

export function TaskPage() {
  const params = useParams();
  const taskId = params.taskId;
  const todoListStore = useContext(TodoListContext);
  const taskList = todoListStore.taskList;

  const currentTask = taskList.find((task) => {
    console.log(task.id === taskId, task.id, taskId);
    return task.id === taskId;
  });
  
  const { title, complited } = currentTask? currentTask : {};

  return (
    <TaskPageContainer>
      <GoBackButton />
      {currentTask?
      <LoadedTask id={taskId} title={title} complited={complited} /> :
      <NotLoadedTask />}
    </TaskPageContainer>
  );
}

const TaskPageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;


`
