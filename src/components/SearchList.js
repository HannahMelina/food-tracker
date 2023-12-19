import React from "react";
import { Card } from "./Card";

export const SearchList = ({ filterdFood, addedFood, setAddedFood }) => {
  const filterd = filterdFood.map((food) => (
    <Card
      key={food.id}
      food={food}
      addedFood={addedFood}
      setAddedFood={setAddedFood}
    />
  ));

  return <div className="flex flex-wrap">{filterd}</div>;
};
