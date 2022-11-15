import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import "../App.css";
import "../pages/Cities.css";

import Checkbox from "../components/Checkbox/Checkbox";

import cityData from "../data2/cityData.js";
import Card from "../components/Card/Card";

import axios from "axios";
import { URL_API } from "../api/url";

const Cities = () => {
  const params = useParams();
  console.log(params)
  const [valueCheck, setValueCheck] = useState([]);
  const [cities, setCities] = useState([])
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    axios.get(`${URL_API}/api/cities`).then((response) => {
      console.log(response.data.response);
      setCities(response.data.response)
    });
  }, []);


  useEffect(() => {
    let path = `${URL_API}/api/cities?`;

    if (valueCheck.length) {
      const valueCheckQuery = valueCheck.map(item => `continent=${item}`)
      const valueCheckQueryAll = valueCheckQuery.join("&");  
      path = path.concat(valueCheckQueryAll)
    }

    if (valueSearch) {
      path = path.concat("&name=" + valueSearch)
    }

    console.log(path);

    axios.get(path).then((response) => {
      console.log(response.data.response);
      setCities(response.data.response)
    });
  }, [valueCheck, valueSearch]);


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
          {arrContinent.map((item) => (
            <Checkbox key={item} onChange={onHandlerChecked} continent={item} />
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
        {cities.map((city) => {
          return (
            <Card
              img={city.photo}
              name={city.name}
              key={city.id}
              idCity={city._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cities;
