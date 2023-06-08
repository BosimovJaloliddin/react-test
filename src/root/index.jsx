import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils";

const Root = () => {
  const navigate = useNavigate();
  const onDelete = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const token = localStorage.getItem("token");
  return (
    <div>
      <button onClick={onDelete}>Delete Login</button>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(
            ({ id, path, element, isPrive }) =>
              isPrive && <Route key={id} path={path} element={element} />
          )}
          {navbar.map(
            ({ id, path, element, isPrive }) =>
              !isPrive && (
                <Route
                  key={id}
                  path={path}
                  element={token ? element : <Navigate to="/login" />}
                />
              )
          )}
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
