import React, { useState } from "react";
import { useEffect } from "react";

const Test = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      });
  }, []);
  return (
    <div>
      <h1>Users list</h1>
      {state.map((v) => (
        <h1>
          {v.id}-{v.name}
        </h1>
      ))}
    </div>
  );
};
export default Test;
