import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/root";
import Context from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Context>
      <Root />
    </Context>
  </>
);
