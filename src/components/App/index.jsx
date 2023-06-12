import React from "react";
const Heading = () => {
  return <h1>HEllow world</h1>;
};
const Test = () => {
  return <input type="text" placeholder="login" />;
};

const App = () => {
  return (
    <div>
      <Heading />
      <Test />
    </div>
  );
};

export default App;
