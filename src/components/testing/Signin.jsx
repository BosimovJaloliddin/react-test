import React, { Component } from "react";

export default class Signin extends Component {
  render() {
    return (
      <div>
        <h1>RSignIn</h1>
        <button onClick={() => this.props.getVal(true)}>Signup</button>
      </div>
    );
  }
}
