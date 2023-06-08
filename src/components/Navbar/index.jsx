import React from "react";
import { Outlet } from "react-router-dom";
import { navbar } from "../../utils";
import { Wrap, Link } from "./syled";

const Navbar = () => {
  return (
    <div>
      <Wrap>
        {navbar.map(({ id, path, title }) => (
          <Link
            style={({ isActive }) => {
              return { color: isActive ? "red" : "white" };
            }}
            key={id}
            to={path}
          >
            {title}
          </Link>
        ))}
      </Wrap>
      <Outlet />
    </div>
  );
};

export default Navbar;
