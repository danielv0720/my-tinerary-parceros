import React, { useState } from "react";

import "../App.css";
import { CityHotels } from "../components/Hotels/CityHotels";
import hotelsData from "../data2/hotelsData";

const Hotels = () => {
  const [sortingFilters, setSortingFilters] = useState(hotelsData);
  const [sortingOption, setSortingOption] = useState("");

  const applySorting = (optionSelected) => {
    setSortingOption(optionSelected);

    let sortingFiltersCopy = [...sortingFilters];

    console.log(optionSelected);

    if (optionSelected === "mayor") {
      console.log(sortingFiltersCopy);

      sortingFiltersCopy = sorting("mayor", sortingFiltersCopy);
    } else if (optionSelected === "menor") {
      sortingFiltersCopy = sorting("menor", sortingFiltersCopy);
    } 

    setSortingFilters(sortingFiltersCopy);
  };

  const sorting = (tipo, sortingFilters) => {
    let result;
    if (tipo === "mayor") {
      result = sortingFilters.sort((a, b) => {
        if (b.name.toLowerCase() < a.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    } else if (tipo === "menor") {
      result = sortingFilters.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    } else {
      return sortingFilters;
    }

    return result;
  };

  const search = (e) => {
    console.log(e.target.value);

    const hotelsDataSearched = hotelsData.filter((evento) => {
      return evento.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    const result = sorting(sortingOption, hotelsDataSearched);

    console.log(result);

    setSortingFilters(result);
  };

  return (
    <>
      {/* <HotelsFilter filterSelected={filterSelected} /> */}
      <div className="container_filter">
        <div>
          <select onChange={(e) => applySorting(e.target.value)}>
            <option selected value="">
              Ordenar por:
            </option>
            <option value="menor">asc/desc</option>
            <option value="mayor">desc/asc</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Buscar" onChange={search} />
        </div>
      </div>
      <CityHotels result={sortingFilters} />
    </>
  );
};

export default Hotels;
