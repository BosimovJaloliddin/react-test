import React, { useContext } from "react";
import { StudentContext } from "./contex";

export const Body = () => {
  const data = useContext(StudentContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "yellow",
        padding: "16px",
      }}
    >
      <h2>Students {data[0].length}</h2>
      <h2>About</h2>
      <h2>Prodaction</h2>
      <h2>Contact</h2>
    </div>
  );
};
