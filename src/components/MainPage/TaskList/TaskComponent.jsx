import { React } from "react";
import { styled } from "styled-components";
import { palette } from "../../../colors";
import { StyledLink } from "../../../colors";
import { shortenTitle } from "../../../shortenTitleFun";
import Open from "./Open.svg";

export function Task(props) {
  const { id, title } = props;

  return (
    <ListItem>
      <StyledLink to={`task/${id}`}>
        <img src={Open} alt="open task" />
      </StyledLink>
      <TaskInfo>
        <h4>{ shortenTitle(title) }</h4>
        <Id>{`id: ${id}`}</Id>
      </TaskInfo>
    </ListItem>
  );
}

const ListItem = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 15px;
  height: 50px;
  width: 70%;
  min-width: 500px;
  padding: 5px 15px;
  background-color: ${palette.taskBackground};
  border-radius: 3px;
  &:hover {
    background-color: #eee8fa;
  }
`;

const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Id = styled.p`
  font-size: 10px;
  color: #7c69aa;
`;
