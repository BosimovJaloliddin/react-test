import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack()}>got back</button>
      <button onClick={() => history.goForward()}>got forword</button>
      <h1>NOT FOUND</h1>
    </div>
  );
};
export default Notfound;
