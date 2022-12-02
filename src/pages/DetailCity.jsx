import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL_API } from "../api/url";
import { Itinerary } from "../components/Itinerary/Itinerary";
import { useDispatch, useSelector } from 'react-redux';

import "./DetailCity.css";
import "../App.css";

const DetailCity = () => {
  const [city, setCity] = useState(null);
  const [itineraries, setItineraries] = useState(null);
  const { idCity } = useParams();
  const { itineraryId } = useParams();

  useEffect(() => {
    axios.get(`${URL_API}/api/cities/${idCity}`).then((response) => {
      setCity(response.data);
    });

    axios
      .get(`${URL_API}/api/itineraries?cityId=${idCity}`)
      .then((response) => {
        console.log(response);
        setItineraries(response.data.response);
      });
  }, [idCity, itineraryId]);

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
      <div className="itineraies_class">
        <h3>Itineraries</h3>
        {itineraries &&
          itineraries.map((item) => <Itinerary key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default DetailCity;
