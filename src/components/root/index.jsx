import React from "react";
// import Fetching from "../fetch";
import Axiosing from "../axios";
import axios from "axios";

const Root = () => {
  axios.interceptors.request.use((res) => {
    console.log(res);
    res.headers.Authorization = "Beryer token";
    return res;
  });
  axios.interceptors.response.use();
  return (
    <div style={{ display: "flex" }}>
      {/* <Fetching /> */}
      <Axiosing />
    </div>
  );
};
export default Root;
