import React, { useState, useEffect } from "react";

import "../../App.css";
import ButtonCity from "../../components/ButtonCity/ButtonCity";
import "./UpdateCity.css";
import Newcityinput from "../../components/NewCity/Newcityinput";
import { URL_API } from "../../api/url";
import axios from "axios";
import Swal from 'sweetalert2'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startUpdateCity } from "../../redux/actions/cityAction";


export default function UpdateCity() {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const { id } = useParams();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [population, setPopulation] = useState("");
  const [continent, setContinent] = useState("");
  const [userId, setUserId] = useState("");


  useEffect(()=>{
    console.log();
    axios.get(`${URL_API}/api/cities/${id}`).then((response) => {
      setName(response.data.name);
      setPhoto(response.data.photo[0]);
      setPopulation(response.data.population);
      setContinent(response.data.continent);
      setUserId(response.data.userId)
      console.log(response.data);
    });
  }, [id])


  const handlerClickForm = (e) => {
    e.preventDefault()

    const dataNewCity = {
      name: name,
      photo: [photo],
      population: population,
      continent: continent,
      userId: userId
    };
    console.log(dataNewCity);

    dispatch(startUpdateCity(id, dataNewCity))
    navigate("/mycities")
  }
  
  return (
    <div className="d-flex w-100 h-100vh space-evenly align-center">
      <form className="form-city" onSubmit={handlerClickForm}>
        <Newcityinput
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={name}
        />
        <Newcityinput
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo(URL)"
          value={photo}
        />
        <Newcityinput
          onChange={(e) => setPopulation(e.target.value)}
          placeholder="Population"
          value={population}
        />
        <Newcityinput
          onChange={(e) => setContinent(e.target.value)}
          placeholder="Continent"
          value={continent}
        />
        <Newcityinput
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          value={userId}
        />

        <div className="container-button">
          <ButtonCity />
        </div>
      </form>
      <div className="city-created">
        <h2>Edit City</h2>
      </div>
    </div>
  )
}