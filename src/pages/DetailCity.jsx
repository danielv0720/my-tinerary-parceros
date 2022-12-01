import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL_API } from "../api/url";

import "./DetailCity.css";
import "../App.css";
import Reaction from "../components/Reaction/Reaction";

const DetailCity = () => {
  const [city, setCity] = useState(null);
  const [itineraries, setItineraries] = useState(null);
  const [reaction, setReaction] = useState(null);
  const { idCity } = useParams();
  const { itineraryId } = useParams();
  console.log(itineraryId);
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

      axios
      .get(`${URL_API}/api/reactions?itineraryId=${itineraryId}`)
      .then((response) => {
        console.log(response.data);
        setReaction(response.data.response);
      });




  }, [idCity,itineraryId]);

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
       <li key={item.id}>{item.name}</li>
       <p>{item.description}</p>
       <img  src={item.photo[0]} alt="imagen" />
       
       <Reaction nombre='like dislike love surprese'> </Reaction>
       
       </>
        )}
      </div>
    </div>
  );
};

export default DetailCity;
