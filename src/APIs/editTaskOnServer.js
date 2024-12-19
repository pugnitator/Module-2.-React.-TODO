// export async function editTaskOnServer(task, taskId) {
//   let result = false;
//   console.log(task, taskId);
//   try {
//     const rawResponse = await fetch(`http://localhost:3004/todos/${+taskId}`, {
//       method: "PUT",
//       body: JSON.stringify(task),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     result = rawResponse.ok;
//   } catch (error) {
//     console.log(error);
//   }
//   return result;
// }
