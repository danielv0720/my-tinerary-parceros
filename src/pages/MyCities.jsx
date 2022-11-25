import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { startDeleteMyCity } from "../redux/actions/cityAction";

export default function MyCities() {
  const myCities = useSelector((state) => state.cities.myCities);
  const dispatch = useDispatch();

  return (
    <>
      {myCities.map((mc) => (
        <div className="card-citie-hotel shadow1 cardmy">
          <img src={mc.photo[0]} alt={mc.name} className="img-card" />
          <h4 className="title-card">{mc.name}</h4>
          <p>Continent: {mc.continent}</p>
          <p>Population: {mc.population}</p>

          <Link className="btn-mycities-edit" to={`/updatecity/${mc._id}`}>Editar</Link>
          <button className="btn-mycities-delet" onClick={() => dispatch(startDeleteMyCity(mc._id))}>
            Eliminar
          </button>
        </div>
      ))}
    </>
  );
}
