import { styled } from "styled-components";
import { AddTaskButton } from "./AddTaskButtonComponent"
import { palette } from "../../colors"; 
import { StyledLink } from "../../colors";


export function Header() {
  return (
    <header>
      <HeaderItemsConteiner>
        <StyledLink to='/'>
          <h1>Список задач</h1>
        </StyledLink>
        <AddTaskButton />
      </HeaderItemsConteiner>
    </header>
  );
}

const HeaderItemsConteiner = styled.div`
  display: flex;
  margin: auto;
  width: 70%;
  min-width: 500px;
  justify-content: space-between;
  align-items: baseline;
  background-color: ${palette.headerBackground};
`;