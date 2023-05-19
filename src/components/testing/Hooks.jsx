import React, { useState } from "react";
const Hooks = () => {
  const [data, setData] = useState({
    one: 0,
    two: 0,
    there: 0,
  });
  console.log(data);
  const onPlus = ({ target: { name } }) => {
    setData({ ...data, [name]: data[name] + 1 });
  };
  const onMinus = ({ target: { name } }) => {
    setData({ ...data, [name]: data[name] - 1 });
    console.log();
  };
  return (
    <div style={{ flex: 1 }}>
      <h1>
        <button name="one" onClick={onMinus}>
          -
        </button>
        {data.one}
        <button name="one" onClick={onPlus}>
          +
        </button>
      </h1>
      <h1>
        <button name="two" onClick={onMinus}>
          -
        </button>
        {data.two}
        <button name="two" onClick={onPlus}>
          +
        </button>
      </h1>
      <h1>
        <button name="there" onClick={onMinus}>
          -
        </button>
        {data.there}
        <button name="there" onClick={onPlus}>
          +
        </button>
      </h1>
    </div>
  );
};
export default Hooks;
