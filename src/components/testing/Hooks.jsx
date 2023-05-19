import React, { useState } from "react";
const Hooks = () => {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("Jaloliddin");
  const [data, setData] = useState({
    count: 0,
    name: "Jaloliddin",
  });
  return (
    <div style={{ flex: 1 }}>
      <h1>hooks counter:{data.count}</h1>
      <h1>hooks counter:{data.name}</h1>
      <input
        onChange={({ target: { value } }) => setData({ ...data, name: value })}
        type="text"
        value={data.name}
      />{" "}
      <br />
      <button onClick={() => setData({ ...data, count: data.count - 1 })}>
        -
      </button>
      <button onClick={() => setData({ ...data, count: data.count + 1 })}>
        +
      </button>
    </div>
  );
};

export default Hooks;
