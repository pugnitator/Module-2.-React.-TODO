import { Link } from "react-router-dom";
import styled from "styled-components";

export const palette = {
  headerBackground: "#9F86DB",
  taskButtonBackground: "#d2c3ff",
  taskBackground: "#f2ecff",
  taskBackgroundHover: "#f2ecff",
};

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  &: hover {
    cursor: pointer;
  }
`;
