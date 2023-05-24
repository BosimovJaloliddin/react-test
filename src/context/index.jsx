import React from "react";
import StudentList from "./Students";

const Context = ({ children }) => {
  return <StudentList>{children}</StudentList>;
};
export default Context;
