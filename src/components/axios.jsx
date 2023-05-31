import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Axiosing = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", { timeout: 10000 })
      .then((res) => {
        setData(res.data);
        console.log(res.data, "axios");
      });
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <h1> Axiosing</h1>
      {data.map((v) => (
        <h1 key={v.id}>{v.name}</h1>
      ))}
    </div>
  );
};
export default Axiosing;
