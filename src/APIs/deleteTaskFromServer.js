export async function deleteTaskFromServer(taskId) {
    let result = false;
    if (taskId) {
      try {
        const rawResponse = await fetch(
            `https://module-2-react-todo-lb0pjrjz8-pugnitators-projects.vercel.app/todos/${taskId}`,
            {
              method: "DELETE",
            }
          );
        result = rawResponse.ok
      } 
      catch (error) {
          console.log(error);
      };
    }
    return result;
}