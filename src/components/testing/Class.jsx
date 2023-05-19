import React, { Component } from "react";

export default class Class extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div style={{ flex: 1 }}>
        <h1>Class count:{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          -
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          +
        </button>
      </div>
    );
  }
}
