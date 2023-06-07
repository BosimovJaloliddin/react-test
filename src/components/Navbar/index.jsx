import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Item, Wrap } from "./syled";

// const ac = (url) => {
//   return window.location.pathname.includes(url);
// };

const Navbar = () => {
  return (
    <>
      <Wrap>
        <Item to={"/"}>Home</Item>
        <Item active={window.location.pathname.includes("/home")} to={"/home"}>
          Home
        </Item>
        <Item to={"/contact"}>Contact</Item>
        <Item to={"/info"}>Info</Item>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
          to={"/login"}
        >
          Login
        </NavLink>
      </Wrap>
      <Outlet />
    </>
  );
};

export default Navbar;
