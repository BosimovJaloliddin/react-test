import React from "react";

import { Item, Wrap } from "./syled";

const Navbar = () => {
  return (
    <Wrap>
      <Item to={"/"}>Logo</Item>
      <Item to={"/home"}>Home</Item>
      <Item to={"/contact"}>Contact</Item>
      <Item to={"/info"}>Info</Item>
    </Wrap>
  );
};

export default Navbar;
