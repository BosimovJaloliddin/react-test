import React, { Component } from "react";
import Hooks from "./Hook";

export default class Class extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div style={{ flex: 1 }}>
        <h1>Count:{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <Hooks value={this.state.count} />
      </div>
    );
  }
}
