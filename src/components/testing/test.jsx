import React, { Component } from "react";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  onClick() {
    this.setState({ count: this.state.count * 2 });
  }
  render() {
    // const onClick = () => {
    //   this.setState({ count: this.state.count * 2 });
    // };
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick.bind(this)}>n*2</button>
        <button onClick={() => this.onClick(this)}>n*2</button>
        <button onClick={() => this.setState({ count: this.state.count * 2 })}>
          n*2
        </button>
      </div>
    );
  }
}
