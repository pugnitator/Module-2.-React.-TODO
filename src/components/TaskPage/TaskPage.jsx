import { useParams } from "react-router-dom";
import { NotLoadedTask } from "./NotLoadedTask";
import { LoadedTask } from "./LoadedTask";
import styled from "styled-components";
import { GoBackButton } from "./GoBackButton";
import { ErrorPage } from "../ErrorPage";
import { useSelector } from "react-redux";

export function TaskPage() {
  const params = useParams();
  const taskId = params.taskId;

  const taskList = useSelector((state) => state.task.currentTaskList);

  try {
    const currentTask = taskList?.find((task) => {
      return task.id === taskId;
    });

    const { title, complited } = currentTask ? currentTask : {};

    return (
      <TaskPageContainer>
        <GoBackButton />
        {currentTask ? 
          <LoadedTask id={taskId} title={title} complited={complited} />
         : taskId ? <ErrorPage /> : <NotLoadedTask />
        }
      </TaskPageContainer>
    );
  } catch (error) {
    console.log(error);
    return <ErrorPage />;
  }
}

const TaskPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;