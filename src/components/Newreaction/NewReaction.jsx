import React, { useState } from "react";

import "../../App.css";
import ButtonCity from "../ButtonCity/ButtonCity";
import "./NewReaction";
import Newcityinput from "./Newcityinput";
import { URL_API } from "../../api/url";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function NewReaction() {
  let navigate = useNavigate();
  const [itineraryId, setItineraryId] = useState("");
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [iconBack, setIconBack] = useState("");
  const [user, setUser] = useState("");

  let dataNewReaction = [{
    itineraryId: "",
    name: "",
    icon: 0,
    iconBack: "",
    userId:""
  }];

  const handlerClickForm = (e) => {
    e.preventDefault();

    dataNewReaction = [{

      itineraryId: itineraryId,
      name: name,
      icon: icon,
      iconBack: iconBack,
      userId: user,
    }];

    axios({
      method: "post",
      url: `${URL_API}/api/reactions`,
      data: dataNewReaction,
      // headers: { token: localStorage.getItem("token") },
    })
      .then((res) => {
        console.log(res);
        setItineraryId("");
        if (res.data.success) {
          Swal.fire("reaccion created")
          return navigate("/");
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
          onChange={(e) => setItineraryId(e.target.value)}
          placeholder="Itinerary ID"
        />
        <Newcityinput
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Newcityinput
          onChange={(e) => setIcon(e.target.value)}
          placeholder="Icon"
        />
        <Newcityinput
          onChange={(e) => setIconBack(e.target.value)}
          placeholder="IconBack"
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
        <h2>Reaction Created Dinamic</h2>
      </div>
    </div>
  );
}
