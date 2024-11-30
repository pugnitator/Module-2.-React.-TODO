// Возвращает true, если запрос выполнен успешно,false - если нет

export async function addTaskToServer(task) {
  let result = false;
  if (task) {
    try {
      const rawResponse = await fetch("http://localhost:3004/todos", {
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