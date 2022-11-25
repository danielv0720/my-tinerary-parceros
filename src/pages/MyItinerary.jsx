import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { startDeleteMyItinerary } from "../redux/actions/itineraryAcion";

export default function MyItineraries() {
  const myItineraries = useSelector((state) => state.itineraries.myItineraries);
  console.log(myItineraries);
  const dispatch = useDispatch();

  return (
    <>
      {myItineraries.map((mi) => (
        <div className="card-citie-hotel shadow1 cardmy ">
          <img src={mi.photo[0]} alt={mi.name} className="img-card" />
          <h4 className="title-card">{mi.name}</h4>
          <p className="descriptioncard">Description: {mi.description}</p>
          <p>Price: {mi.price}</p>
          <p>Duration: {mi.duration} horas</p>

          <Link className="btn-mycities-edit" to={`/updateitineraries/${mi._id}`}>Editar</Link>
          <button className="btn-mycities-delet" onClick={() => dispatch(startDeleteMyItinerary(mi._id))}>
            Eliminar
          </button>
        </div>
      ))}
    </>
  );
}