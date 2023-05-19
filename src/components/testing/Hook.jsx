import React, { useReducer } from "react";

const Hooks = () => {
  const reduce = (state, action) => {
    switch (action.type) {
      case "counter":
        return state + action.payload;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reduce, 0);

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => dispatch({ type: "counter", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "counter", payload: -1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "counter", payload: 50 })}>
        +50
      </button>
      <button onClick={() => dispatch({ type: "counter", payload: -50 })}>
        -50
      </button>
    </div>
  );
};
export default Hooks;
