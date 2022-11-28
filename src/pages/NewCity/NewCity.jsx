import React, { useState } from "react";

import "../../App.css";
import ButtonCity from "../../components/ButtonCity/ButtonCity";
import "./NewCity.css";
import Newcityinput from "./Newcityinput";
import { URL_API } from "../../api/url";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function NewCity() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [population, setPopulation] = useState(0);
  const [continent, setContinent] = useState("");
  const [user, setUser] = useState("");

  let dataNewCity = {
    name: "",
    photo: "",
    population: 0,
    continent: "",
  };

  const handlerClickForm = (e) => {
    e.preventDefault();

    dataNewCity = {
      name: name,
      photo: photo,
      population: population,
      continent: continent,
      userId: user,
    };

    axios({
      method: "post",
      url: `${URL_API}/api/cities`,
      data: dataNewCity,
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => {
        console.log(res);
        setName("");
        if (res.data.success) {
          return navigate("/cities");
        } else {
          Swal.fire(res.data.message.join("  -    -   -    -   -"));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 h-100vh space-evenly align-center">
      <form className="form-city" onSubmit={handlerClickForm}>
        <Newcityinput
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Newcityinput
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo(URL)"
        />
        <Newcityinput
          onChange={(e) => setPopulation(e.target.value)}
          placeholder="Population"
        />
        <Newcityinput
          onChange={(e) => setContinent(e.target.value)}
          placeholder="Continent"
        />
        <Newcityinput
          onChange={(e) => setUser(e.target.value)}
          placeholder="User ID"
        />

        <div className="container-button">
          <ButtonCity />
        </div>
      </form>
      <div className="city-created">
        <h2>City Created Dinamic</h2>
      </div>
    </div>
  );
}
