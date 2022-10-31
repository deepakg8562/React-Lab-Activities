import React from "react";
import FruitType from "./FruitType";

const Fruit = () => {
  const fruits = [
    { id: 1, name: "Apples" },
    { id: 2, name: "Blueberries" },
    { id: 3, name: "Strawberries" },
    { id: 4, name: "Bananas" },
  ];

  return (
    <div>
      <FruitType passedState={fruits} />
    </div>
  );
};

export default Fruit;
