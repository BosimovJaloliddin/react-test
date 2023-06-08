import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const data = [
  { id: 1, name: "Ali Aliyev" },
  { id: 2, name: "Anvar Anvarov" },
  { id: 3, name: "Arslon Arslonov" },
  { id: 4, name: "Abbos Abbosov" },
  { id: 5, name: "Alijon Alijonov" },
  { id: 6, name: "Ahmad Ahmadov" },
];

const Home = () => {
  const [state, setState] = useState({});
  const params = useParams();
  useEffect(() => {
    let res = data.find((v) => v.name === params.id);
    setState(res);
  }, [params?.id]);
  console.log(params.id);
  return (
    <div>
      <h3>Name:{state.name}</h3>
    </div>
  );
};

export default Home;
