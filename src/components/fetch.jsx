import React, { useState } from "react";
import { useEffect } from "react";

const Fetching = () => {
  const [state, setState] = useState([]);
  const signal = new AbortController();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      mathod: "",
      headers: {},
      body: {},
      signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setState(res);
        console.log(res, "fetch");
      });
  }, []);
  setTimeout(() => signal.abort(), 10000);
  return (
    <div style={{ flex: 1 }}>
      <h1> Fetch</h1>
      {state.map((v) => (
        <h1 key={v.id}>{v.username}</h1>
      ))}
    </div>
  );
};
export default Fetching;
