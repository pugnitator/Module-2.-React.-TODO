import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function GoBackButton() {
    const navigate = useNavigate();

  return <BackButton onClick={() => navigate(-1)}>{"<-- назад"}</BackButton>;
}

const BackButton = styled.button`
  margin: 10px 10px;
  padding: 10px;
  display: block;
  align-self: start;
  border: none;
  background-color: none;
`;
