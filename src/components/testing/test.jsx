import React, { Component } from "react";
import { student } from "./mock.js";

export default class Test extends Component {
  state = {
    active: true,
    data: student,
  };
  render() {
    const onDelete = (id) => {
      let res = this.state.data.filter((v) => v.id !== id);
      this.setState({ data: res });
    };
    return (
      <div>
        <h1>List</h1>
        {this.state.active
          ? this.state.data.map((v, index) => (
              <div key={index}>
                <span>
                  {index + 1}-<b>{v.id}</b> - {v.name}
                </span>
                <button onClick={() => onDelete(v.id)}>Delete</button>
              </div>
            ))
          : "Godbay"}
      </div>
    );
  }
}
