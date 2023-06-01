import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background: black;
`;
const active = { color: "red" };

export const Item = styled(NavLink).attrs(() => {
  return { activeStyle: active };
})`
  margin: 1rem 1rem;
`;
