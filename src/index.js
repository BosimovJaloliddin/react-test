import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/testing/root";
import StudentList from "./components/testing/contex";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <StudentList>
      <Root />
    </StudentList>
  </>
);
