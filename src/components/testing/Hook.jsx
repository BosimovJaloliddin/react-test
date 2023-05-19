import React, { useReducer } from "react";

const Hooks = () => {
  const reduce = (state, action) => {
    switch (action.type) {
      case "bir":
        return state + action.payload;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reduce, 0);
  return (
    <div>
      <h1>useReducer counter:{count}</h1>
      <button onClick={() => dispatch({ type: "bir", payload: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: "bir", payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "bir", payload: 20 })}>
        +20
      </button>
      <button onClick={() => dispatch({ type: "bir", payload: 50 })}>
        +50
      </button>
      <button onClick={() => dispatch({ type: "bir", payload: -50 })}>
        -50
      </button>
      <button onClick={() => dispatch({ type: "bir", payload: 100 })}>
        100
      </button>
    </div>
  );
};
export default Hooks;
