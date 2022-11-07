import React from "react";
import { Link } from "react-router-dom";

export default function OneHotel(props) {
  const { datos, id } = props;
  return (
    <>
      <div className="carousel_container2">
        <div className="card2">
          <div className="card3">
            <div className="capa1">
            
              <h3>{datos.name}</h3>
              
            </div>
            <div className="capa3">
            
            </div>
            
            <img src={datos.photo[0]} alt="imagen1" />
            
          </div>
            
        </div>
        <Link className="link" to={`/hotel/${id}`}>Ver Mas...</Link>
      </div>
    </>
  );
}
