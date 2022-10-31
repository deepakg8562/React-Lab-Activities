import MyContext from "./MyContext";
import React, { Component } from "react";

class MyProvider extends Component {
  state = {
    mall: {
      theatre: "Inox",
      screen: ["Tiger", "Cheetah", "Lion"],
      times: ["9 PM", "1 PM", "5 PM"],
    },
  };

  render() {
    return (
      <MyContext.Provider value={{ mall: this.state.mall }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
