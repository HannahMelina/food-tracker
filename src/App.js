import "./index.css";
import React, { useState } from "react";
import Search from "./components/Search";
import { FoodData } from "./Data/FoodData";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [addedFood, setAddedFood] = useState([]);

  function RemoveItem(id) {
    const item = addedFood.find((food) => food.id === id);
    const index = addedFood.indexOf(item);
    if (index < 0) {
      return;
    }
    addedFood.splice(index, 1);
    setAddedFood([...addedFood]);
  }

  return (
    <div className="font-sans bg-lime-700 text-xl min-h-screen">
      <div className="max-w-[1280px] mx-auto min-h-screen bg-lime-200 pr-5 pb-2">
        <Search
          details={FoodData}
          addedFood={addedFood}
          setAddedFood={setAddedFood}
        />

        <div className="text-3xl m-5 font-semibold ">
          {`gesamt: ${addedFood.reduce((r, food) => r + food.kcal, 0)} kcal`}
        </div>

        {addedFood.map((food, index) => (
          <div className="text-xl m-5 font-semibold">
            <li key={index}>
              {`${food.name}: ${food.menge}, ${food.kcal} kcal  `}
              <button
                className="ml-7 block bg-lime-300 rounded pl-4 pr-4 mt-1 border-2 border-lime-700 hover:bg-lime-700 active:bg-lime-200"
                onClick={() => RemoveItem(food.id)}
              >
                <MdDeleteForever />
              </button>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
