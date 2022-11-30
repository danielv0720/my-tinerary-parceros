import React, { useState } from "react";

import "../../App.css";
import ButtonCity from "../../components/ButtonCity/ButtonCity";
import "./NewItinerary.css";
import Newcityinput from "./Newcityinput";
import { URL_API } from "../../api/url";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function NewItinerary() {
  let navigate = useNavigate();
  
  const [cityId, setCityId] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState(0);
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [userId, setUserId] = useState("");

  let dataNewItinerary = {
    cityId:"",
    name: "",
    photo: "",
    description: "",
    price: "",
    duration: "",
    userId: "",
  };

  const handlerClickForm = (e) => {
    e.preventDefault();

    dataNewItinerary = {
      cityId:cityId,
      name: name,
      photo: photo,
      description: description,
      price: price,
      duration: duration,
      userId: userId,
    };

    axios({
      method: "post",
      url: `${URL_API}/api/itineraries`,
      data: dataNewItinerary,
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => {
        console.log(res);
        setName("");
        if (res.data.success) {
          return navigate("/myitineraries");
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
          onChange={(e) => setCityId(e.target.value)}
          placeholder="CityId"
        />
        <Newcityinput
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Newcityinput
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo(URL)"
        />
        <Newcityinput
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <Newcityinput
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
                <Newcityinput
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration"
        />
        <Newcityinput
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
        />

        <div className="container-button">
          <ButtonCity />
        </div>
      </form>
      <div className="city-created">
        <h2>Itinerary Created Dinamic</h2>
      </div>
    </div>
  );
}
