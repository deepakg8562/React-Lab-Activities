import React from "react";
import Screen from "./Screen";
import MyContext from "./MyContext";

const Theatre = () => {
  return (
    <MyContext.Consumer>
      {(props) => (
        <div>
          <Screen
            theatre={props.mall.theatre}
            screen={props.mall.screen}
            times={props.mall.times}
          />
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Theatre;
