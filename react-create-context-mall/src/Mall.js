import React, { Component } from "react";
import MyProvider from "./MyProvider";
import Theatre from "./Theatre";

class Mall extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <h3>Task C</h3>
          <Theatre />
        </div>
      </MyProvider>
    );
  }
}

export default Mall;
