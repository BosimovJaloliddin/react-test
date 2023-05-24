import React from "react";
import { useStudentContext } from "../../context/Students";

const Navbar = () => {
  const [state, dispatch] = useStudentContext();
  return (
    <div>
      {state.user.map((v) => (
        <h1 key={v.id}>
          {v.id}-{v.name}{" "}
          <button onClick={() => dispatch({ type: "delete", payload: v.id })}>
            Delete
          </button>
        </h1>
      ))}
    </div>
  );
};
export default Navbar;
