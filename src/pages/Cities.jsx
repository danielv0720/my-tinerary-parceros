import React, { useState, useEffect } from "react";

import "../App.css";
import "../pages/Cities.css";

import Checkbox from "../components/Checkbox/Checkbox";

import cityData from "../data2/cityData.js";
import Card from "../components/Card/Card";

import { URL_API } from "../api/url";
import { useDispatch, useSelector } from "react-redux";
import { startSaveCitiesWithFilter } from "../redux/actions/cityAction";

const Cities = () => {
  const citiesState = useSelector(state => state.cities.cities)
  
  const dispatch = useDispatch()
  const [valueCheck, setValueCheck] = useState([]);
  const [valueSearch, setValueSearch] = useState("");


  useEffect(() => {
    let rutaBase = `${URL_API}/api/cities?`;

    if (valueCheck.length) {
      const valueCheckQuery = valueCheck.map(item => `continent=${item}`)
      const valueCheckQueryAll = valueCheckQuery.join("&");  
      rutaBase = rutaBase.concat(valueCheckQueryAll)
    }

    if (valueSearch) {
      rutaBase = rutaBase.concat("&name=" + valueSearch)
    }

    console.log(rutaBase);

    dispatch(startSaveCitiesWithFilter(rutaBase))
  }, [valueCheck, valueSearch, dispatch]);


  const continents = cityData.map((city) => city.continent);
  const continentsClean = new Set(continents);
  const arrContinent = Array.from(continentsClean);

  let onHandlerChecked = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    if (checked === true) {
      setValueCheck([...valueCheck, value]);
    } else if (checked === false) {
      setValueCheck(valueCheck.filter((item) => item !== value));
    }
  };

  let handleChangeSearch = (e) => {
    setValueSearch(e.target.value);
  };


  return (
    <div className="w-100 cities d-flex align-center grow column">
      <div className="container-inputs p-10">
        <div className="d-flex center gap-5">
          {arrContinent.map((item, i) => (
            <Checkbox key={i} onChange={onHandlerChecked} continent={item} />
          ))}
        </div>
        <div className="d-flex gap-5">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onChange={handleChangeSearch}
          />
          <button className="btn-search">Search</button>
        </div>
      </div>
      <div className="cards">
        {citiesState.map((city) => {
          return (
            <Card
              img={city.photo}
              name={city.name}
              key={city.id}
              path={`/city/${city._id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cities;
