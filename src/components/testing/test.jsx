import React from "react";
import "./test.css";
// import { student } from "./mock";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      age: "",
      status: "",
    };
  }
  render() {
    const onChange = ({ target: { value, name } }) => {
      this.setState({ [name]: value });
    };
    return (
      <>
        <div>
          <h2>Name: {this.state.name}</h2>
          <h2>Surname: {this.state.surname}</h2>
          <h2>Age: {this.state.age}</h2>
          <h2>Status: {this.state.status}</h2>
        </div>
        <div>
          <input
            onChange={onChange}
            name="name"
            type="text"
            placeholder="name"
          />
          <input
            onChange={onChange}
            name="surname"
            type="text"
            placeholder="surname"
          />
          <input onChange={onChange} name="age" type="text" placeholder="age" />
          <input
            onChange={onChange}
            name="status"
            type="text"
            placeholder="status"
          />
        </div>
      </>
    );
  }
}
export default Test;
