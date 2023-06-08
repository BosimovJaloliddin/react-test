import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({});
  const [state, setState] = useState([
    { id: 1, name: "Ali Aliyev" },
    { id: 2, name: "Anvar Anvarov" },
    { id: 3, name: "Arslon Arslonov" },
    { id: 4, name: "Abbos Abbosov" },
    { id: 5, name: "Alijon Alijonov" },
    { id: 6, name: "Ahmad Ahmadov" },
  ]);
  const navigate = useNavigate();
  const onClick = (name) => {
    let res = state.find((v) => v.name === name);
    setUser(res);
    navigate(`/home/${name}`);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          {state.map(({ id, name }) => (
            <h3 key={id}>
              {id}-{name} <button onClick={() => onClick(name)}>Get</button>
            </h3>
          ))}
        </div>
        <h3>Name:{user.name}</h3>
      </div>
    </div>
  );
};

export default Home;
