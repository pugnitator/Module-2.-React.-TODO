export async function getTasksList() {
    let result;
    try {
      const response = await fetch("http://localhost:3004/todos");
      result = await response.json(); 
    } catch (error) {
      result = error;
    }
    console.log(result)
    return result;
  }