import React from "react";
import "./test.css";
import { students } from "./mock";
import Signin from "./Signin";
import Signup from "./Signup";
class Test extends React.Component {
  state = {
    active: true,
    data: students,
  };
  render() {
    const getVal = (value) => {
      this.setState({ active: value });
    };
    return (
      <div>
        {this.state.active ? (
          <Signup getVal={getVal} />
        ) : (
          <Signin getVal={getVal} />
        )}
      </div>
    );
  }
}
export default Test;
