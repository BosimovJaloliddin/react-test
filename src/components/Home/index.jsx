import React from "react";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});
  const data = [
    { id: 1, name: "Ali", username: "Aliyev" },
    { id: 2, name: "Ahmad", username: "Aliyev" },
    { id: 3, name: "Nozim", username: "Aliyev" },
    { id: 4, name: "Asal", username: "Aliyev" },
    { id: 5, name: "Nurbek", username: "Aliyev" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        {data.map((v) => (
          <h1>
            {v.id}-{v.name} <button onClick={() => setUser(v)}>Click</button>
          </h1>
        ))}
      </div>
      <h1>User:{user.name}</h1>
    </div>
  );
};

export default Home;
