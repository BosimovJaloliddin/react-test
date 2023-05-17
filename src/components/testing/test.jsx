import React from "react";
import "./test.css";
import { students } from "./mock";

class Test extends React.Component {
  state = {
    data: students,
  };
  render() {
    return (
      <div>
        {this.state.data.map((v) => (
          <div key={v.id}>
            <h3>
              {v.id} {v.name}
            </h3>
          </div>
        ))}
      </div>
    );
  }
}
export default Test;
