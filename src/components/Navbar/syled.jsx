import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background: black;
`;

export const Link = styled(NavLink)`
  font-size: 32px;
`;
