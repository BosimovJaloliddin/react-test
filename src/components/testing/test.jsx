import React from "react";
import "./test.css";
class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    // this.plus = this.plus.bind(this);
  }
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps");
  // }
  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }
  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }
  // componentDidUpdate() {
  //   console.log("componentWillUpdate");
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }
  // plus() {
  //   this.setState({ count: this.state.count + 1 });
  // }
  render() {
    return (
      <div>
        {/* {console.log("render")} */}
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}

export default Test;
