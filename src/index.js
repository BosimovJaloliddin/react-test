import React from "react";
import ReactDOM from "react-dom/client";
import Class from "./components/testing/Class";
import Hooks from "./components/testing/Hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div style={{ display: "flex" }}>
      <Class />
      <Hooks />
    </div>
  </>
);
