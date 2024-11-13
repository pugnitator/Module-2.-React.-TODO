import { styled } from 'styled-components';

export function Task({id, title}) {
    return (
        <ListItem>{id}. {title}</ListItem>
    )
}

const ListItem = styled.li`
    box-sizing: border-box;
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