// Возвращает true, если запрос выполнен успешно,false - если нет

export async function addTaskToServer(task) {
  let result = false;
  if (task) {
    try {
      const rawResponse = await fetch("https://module-2-react-todo-lb0pjrjz8-pugnitators-projects.vercel.app/todos", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      result = rawResponse.ok
    } 
    catch (error) {
        console.log(error);
    };
  }
  return result;
}