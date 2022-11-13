import React, { useState, useEffect } from 'react'
import NewHotel from './NewHotel'
import NewHotelButton from './NewHotelButton'
import { URL_API } from '../../api/url'
import axios from 'axios'

export default function NewHotelCreate() {

/* useEffect(()=>{
 
},[])
 */
const [name,setName]= useState('')
const [photo,setPhoto]= useState('')
const [capacity,setCapacity]= useState(0)
const [city,setCity]= useState('')


let data_hotel = {
  name: "",
  photo: "",
  capacity: 0,
 
}
  const handleSubmit= (e) =>{
    e.preventDefault()

    data_hotel = {
      name: name,
      photo: photo,
      capacity: capacity,
      cityId: city,
      usedId: ""
    }

    axios({
      method: 'post',
      url: `${URL_API}/api/hotels`,
      data: data_hotel
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
  }

  
  return (
    <>
    <form className='create_form' onSubmit={handleSubmit}>
    <NewHotel 
      onChange={(e) => setName(e.target.value)} 
      placeholder='Holtel Name' />
    <NewHotel 
      onChange={(e) => setPhoto(e.target.value)} 
      placeholder='Photo (URL)' />
    <NewHotel 
      placeholder='Capacity' 
      onChange={(e) => setCapacity(e.target.value)} 
      />
      
    <NewHotel 
      placeholder='City'
      onChange={(e) => setCity(e.target.value)} 
    />
    <NewHotelButton 
    />
    </form>
    </>
  )
}
