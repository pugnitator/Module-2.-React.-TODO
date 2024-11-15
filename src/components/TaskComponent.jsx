import { React, useState } from "react";
import { styled } from 'styled-components';

export function Task({id, title}) {
    const [isEdited, setIsEdited] = useState(true)
    const onClick = () => {
        setIsEdited(false);
    }

    return (
        <ListItem>
            <TaskInput type='text' value={`${id}. ${title}`} disabled={isEdited}/>
            <TaskButtons>
                <Button id={'edit'} onClick={onClick}>Изменить</Button>
                <Button id={'delete'} >Удалить</Button>
            </TaskButtons>
        </ListItem>
    )
}

const ListItem = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 70%;
    min-width: 500px;
    padding: 5px 15px;
    background-color: #E5DAFF;
    border-radius: 3px;
    &:hover {
        background-color: #DED4FA;
    }
`
const TaskButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3px;
    align-items: center;
    margin: 0;
    padding: 0;
    border: none;
`
const TaskInput = styled.input`
    background-color: rgba(205, 214, 219, 0);
    border: none;
`

const Button = styled.button`
    height: 25px;
    box-sizing: content-box;
    color: white;
    border: none;
    background-color: #7C69AA;
    border-radius: 2px;
    &:hover {
        background-color: ${(prop) => prop.id === 'delete' ? '#B0204D' : '#D9A84E'}
    }
`