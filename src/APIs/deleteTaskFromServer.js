export async function deleteTaskFromServer(taskId) {
    let result = false;
    if (taskId) {
      try {
        const rawResponse = await fetch(
            `http://localhost:3004/todos/${+taskId}`,
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