import React, { useState, useEffect } from "react";

import "../../App.css";
import ButtonCity from "../ButtonCity/ButtonCity";
import "./UpdateItinerary.css";
import Newcityinput from "../../pages/NewCity/Newcityinput";
import { URL_API } from "../../api/url";
import axios from "axios";
import Swal from 'sweetalert2'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startUpdateCity } from "../../redux/actions/cityAction";
import { startUpdateItinerary } from "../../redux/actions/itineraryAcion";


export default function UpdateItinerary() {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const { id } = useParams();

  const [cityId, setCityId] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [userId, setUserId] = useState("");


  useEffect(()=>{
    console.log('inicio useefect');
    axios.get(`${URL_API}/api/itineraries/${id}`).then((response) => {
      console.log(response);
      setCityId(response.data.cityId);
      setName(response.data.name);
      setPhoto(response.data.photo[0]);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setDuration(response.data.duration);
      setUserId(response.data.userId)
      console.log(response.data);
    });
  }, [id])


  const handlerClickForm = (e) => {
    e.preventDefault()

    const dataNewItinerary = {

      cityId:cityId,
      name: name,
      photo: [photo],
      description: description,
      price: price,
      duration:duration,
      userId: userId
    };
    console.log(dataNewItinerary);

    dispatch(startUpdateItinerary(id, dataNewItinerary))
    navigate("/myitineraries")
  }
  
  return (
    <div className="d-flex w-100 h-100vh space-evenly align-center">
      <form className="form-city2" onSubmit={handlerClickForm}>
        <Newcityinput
          onChange={(e) => setCityId(e.target.value)}
          placeholder="cityId"
          value={cityId}
        />
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
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          value={description}
        />
        <Newcityinput
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
          value={price}
        />
         <Newcityinput
          onChange={(e) => setDuration(e.target.value)}
          placeholder="duration"
          value={duration}
        />
        <Newcityinput
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          value={userId}
        />

        <div className="container-button">
          <ButtonCity/>
        </div>
      </form>
      <div className="city-created">
        <h2>Edit Itinerary</h2>
      </div>
    </div>
  )
}