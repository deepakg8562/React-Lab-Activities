import React, { Component } from "react";

class LifeCycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "default",
      Price: 0.0,
    };
  }

  UNSAFE_componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  invoke() {
    this.setState({
      Name: "TV",
      Price: 30000,
    });
  }

  render() {
    return (
      <div>
        <h1>Life Cycle Example</h1>
        Name: {this.state.Name}
        Price: {this.state.Price}
        <br />
        <a onClick={this.invoke.bind(this)}>Click to Update</a>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should COMPONENT uPDATE");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("Component Will Update");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }
}

export default LifeCycleEx;
