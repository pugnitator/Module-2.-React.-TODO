import { styled } from 'styled-components'

export function AddTaskButton(props) {
    const {updateList} = props;
    const onClick = () => {
        const taskTitle = prompt('Опишите задачу');
        if (taskTitle) {
            const task = {
                id: Date.now(),
                title: taskTitle,
                complited: false,
            }
            fetch('http://localhost:3004/todos', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then(updateList)
            .catch(console.log('ne ok'))
        }
    };

    return (
        <AddButton onClick={onClick}>Новая задача</AddButton>
    )
}

const AddButton = styled.button`
  margin: 0;
  padding: 10px;
  align-self: center;
  background-color: white;
  border: 3px solid #282a2e;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #BCF7A1;
  }
`