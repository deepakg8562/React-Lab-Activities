// import React from "react";
import { useState } from "react";
import React, { Component } from "react";

const MovieList = ({ name, price }) => {
  const [Data, setData] = useState({
    price: 80,
    name: "default",
  });

  function changeInfo() {
    setData({
      price: 180,
      name: "Avengers",
    });
  }

  return (
    <div>
      <p>Price of ticket is: {Data.price}</p>
      <p>Name of Movie is: {Data.name}</p>
      <input type="button" onClick={changeInfo} value="Click to Change" />
    </div>
  );
};

// export default MovieList;

class MovieList1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        price: 80,
        name: "default",
      },
    };
    this.changeInfo = this.changeInfo.bind(this);
  }

  changeInfo() {
    this.setState({
      data: {
        price: 100,
        name: "Avengers",
      },
    });
  }

  render() {
    return (
      <div>
        <p>Price of ticket is: {this.state.data.price}</p>
        <p>Name of Movie is: {this.state.data.name}</p>
        <input
          type="button"
          onClick={this.changeInfo}
          value="Click to Change"
        />
      </div>
    );
  }
}

export default MovieList1;
