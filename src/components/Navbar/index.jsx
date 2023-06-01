import React from "react";
import { Container, Item } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Item exact to={"/home"}>
        Home
      </Item>
      <Item to={"/about"}>About</Item>
      <Item to={"/contact"}>Contact</Item>
      <Item to={"/info"}>Info</Item>
    </Container>
  );
};
export default Navbar;
