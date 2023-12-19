import React from "react";
import { Scroll } from "./Scroll";
import { SearchList } from "./SearchList";
import { useState } from "react";

function Search({ details, addedFood, setAddedFood }) {
  const [searchField, setSearchField] = useState("");

  const filterdFood = details.filter((food) => {
    return (
      food.name.toLowerCase().includes(searchField.toLowerCase()) ||
      food.kcal.toString().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList
          filterdFood={filterdFood}
          addedFood={addedFood}
          setAddedFood={setAddedFood}
        />
      </Scroll>
    );
  }
  return (
    <section>
      <div>
        <h2 className="text-center text-5xl font-semibold pt-8 pb-5">
          Lebensmittel mit kcal Angabe
        </h2>
      </div>
      <div className="font-sans">
        <input
          className="placeholder-white hover:bg-lime-300 p-3 m-5 text-2xl font-semibold border-2 border-lime-700 rounded bg-lime-700 text-xl outline-none focus:bg-lime-300"
          type="search"
          placeholder="Suche hier..."
          value={searchField}
          onChange={handleChange}
        />
      </div>
      <div className="bg-lime-700 text-xl font-semibold ml-5 border-solid border-2 border-black rounded-md">
        {searchList()}
      </div>
    </section>
  );
}

export default Search;
