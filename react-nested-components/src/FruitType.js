import React from "react";

const FruitType = (props) => {
  const displayFruits = props.passedState.map((st) => {
    return <li key={st.id}>{st.name}</li>;
  });
  return (
    <div>
      <h2>Fruits:</h2>
      {displayFruits}
      {/* <ul>
        <li>Apples</li>

        <li>Blueberries</li>

        <li>Strawberries</li>

        <li>Bananas</li>
      </ul> */}
    </div>
  );
};

export default FruitType;
