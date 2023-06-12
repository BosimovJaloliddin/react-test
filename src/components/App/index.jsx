import { Carousel } from "antd";
import React from "react";
// import {} "../../img/img1.jpg";
// import {Image2} "../../img/img2.jpg";

const contentStyle = {
  height: "360px",
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => (
  <div style={{ height: "300px" }}>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img style={{ width: "100%" }} src="./img/img1.jpg" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img style={{ width: "100%" }} src="./img/img2.jpg" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img style={{ width: "100%" }} src="./img/img1.jpg" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img style={{ width: "100%" }} src="./img/img2.jpg" alt="" />
        </h3>
      </div>
    </Carousel>
    <div>
      <h1 style={{ color: "red" }}>Hellow</h1>
    </div>
  </div>
);
export default App;
