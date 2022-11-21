import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL_API } from "../api/url";

import "./DetailCity.css";
import "../App.css";

const DetailCity = () => {
  const [city, setCity] = useState(null);
  const [itineraries, setItineraries] = useState(null);
  const { idCity } = useParams();
  console.log(idCity);

  useEffect(() => {
    axios.get(`${URL_API}/api/cities/${idCity}`).then((response) => {
      console.log(response.data);
      setCity(response.data);
    });

    axios
      .get(`${URL_API}/api/itineraries?cityId=${idCity}`)
      .then((response) => {
        console.log(response.data);
        setItineraries(response.data.response);
      });
  }, [idCity]);

  return (
    <div className="d-flex center align-center w-100 h-100vh">
      <div className="cardDetail shadow1">
        {city && (
          <>
            <img className="img-detail" src={city.photo[0]} alt="imagen" />
            <h3>{city.name}</h3>
            <p>
              <b>Continent: </b> {city.continent}
            </p>
            <p>
              <b>Population: </b> {city.population}
            </p>
          </>
        )}
      </div>
        <div className="itineraies_class"><h3>Itineraries</h3>
      {itineraries && itineraries.map((item) => 
      <>
       <li >{item.name}</li>
       <img  src={item.photo[0]} alt="imagen" />
       </>
        )}
      </div>
    </div>
  );
};

export default DetailCity;
