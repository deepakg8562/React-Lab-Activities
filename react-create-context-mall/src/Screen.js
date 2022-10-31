import React from "react";

const Screen = (props) => {
  return (
    <div>
      <h3>Theatre name: {props.theatre}</h3>
      <h3>Screen name:</h3>
      <ul> {props.screen[0]}</ul>
      <ul> {props.screen[1]}</ul>
      <ul> {props.screen[2]}</ul>
      <h3>Show times:</h3>
      <ul> {props.times[0]}</ul>
      <ul> {props.times[1]}</ul>
      <ul> {props.times[2]}</ul>
    </div>
  );
};

export default Screen;
