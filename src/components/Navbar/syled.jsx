import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  justify-items: center;
  background: black;
`;
export const Item = styled(NavLink)`
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ active }) => (active ? "red" : "white")};
`;
