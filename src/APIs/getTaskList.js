export async function getTasksList() {
    let result;
    try {
      const response = await fetch("https://module-2-react-todo-lb0pjrjz8-pugnitators-projects.vercel.app/todos");
      result = await response.json(); 
    } catch (error) {
      result = error;
    }
    console.log(result)
    return result;
  }