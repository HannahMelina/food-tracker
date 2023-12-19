import React from "react";
import { Calculate } from "./Calculate";

export const Card = ({ food, addedFood, setAddedFood }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4  p-5 ">
      <div className="p-3 rounded-lg gap-5 shadow-xl shadow-lime-900 bg-lime-200 border-solid border-2 border-black rounded-md">
        <div className="text-2xl">{food.name}</div>
        <div>
          {food.menge}
          <div>{`${food.kcal} kcal`}</div>
          <div>
            <Calculate
              food={food}
              addedFood={addedFood}
              setAddedFood={setAddedFood}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
