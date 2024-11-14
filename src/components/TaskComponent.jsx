import { styled } from 'styled-components';

export function Task({id, title}) {
    return (
        <ListItem>
            <p>{id}. {title}</p>
            <button>Удалить</button>
        </ListItem>
    )
}

const ListItem = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    hight: 20px;
    width: 70%;
    min-width: 500px;
    padding: 3px;
    background-color: #D3D4F5;
    border: 1px solid #B4B5D1;
    border-radius: 3px;
    &:hover {
        background-color: #B4B5D1;
    }
`