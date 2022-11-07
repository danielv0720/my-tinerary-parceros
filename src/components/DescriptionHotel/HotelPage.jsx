import React from 'react'
import { useParams, redirect, Link } from 'react-router-dom';
import hotelsData from '../../data2/hotelsData';
import '../DescriptionHotel/HotelPage'

export const HotelPage = () => {
  const {id} = useParams()
  console.log(id);

   const hotel = hotelsData.find(hotel => hotel.id === id)

   if (!hotel) {
    // redirigir
  //  return <Link to={`/hotel/${id}`}>Mas...</Link>
  }

  console.log(hotel);


  return (
    <>
    <div>
    <div className="description_container">
      <img className="img_drescription" alt='' src={hotel.photo[2]}></img>
      <div className="">
      <h3> <span>Name:</span> {hotel.name}</h3>
      <ul className="">
        <li className="">
          <p><span>Drescription:</span> {hotel.description} </p> 
        </li>
        <li className="">
          <p><span>Capacity:</span> {hotel.capacity}:</p> 
        </li>
        <li className="">
          <p><span>Id:</span> {hotel.id}</p> 
        </li>
      </ul>
    </div>

    </div>

  </div>
  </>
  )
}
