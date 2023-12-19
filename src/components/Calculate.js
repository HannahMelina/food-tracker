import React from "react";
import { SiVerizon } from "react-icons/si";

export const Calculate = ({ food, addedFood, setAddedFood }) => {
  return (
    <div>
      <button
        className="bg-lime-300 rounded p-1 mt-1 border-2 border-lime-700 p-1 hover:bg-lime-700 active:bg-lime-200"
        onClick={() => addToSum(food)}
      >
        <h1 className="flex decoration-orange-500 ">
          Add
          <SiVerizon />
        </h1>
      </button>
    </div>
  );

  function addToSum(food) {
    setAddedFood([...addedFood, food]);
  }
};
