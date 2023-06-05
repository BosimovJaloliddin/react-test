import React from "react";
import { Route, Routes } from "react-router-dom";
import { data } from "../utils";

const Root = () => {
  //   const navigate = useNavigate();
  return (
    <Routes>
      {data.map(({ id, path, element, child, children }) => {
        return child ? (
          <Route key={id} path={path} element={element}>
            {children.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Route>
        ) : (
          <Route key={id} path={path} element={element} />
        );
      })}
    </Routes>
  );
};

export default Root;
