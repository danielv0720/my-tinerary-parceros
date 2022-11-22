import React, { useState, useEffect } from 'react'
import NewHotel from './NewHotel'
import NewHotelButton from './NewHotelButton'
import { URL_API } from '../../api/url'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
export default function NewHotelCreate() {

/* useEffect(()=>{
 
},[])
 */
const [name,setName]= useState('')
const [photo,setPhoto]= useState('')
const [capacity,setCapacity]= useState(0)
const [city,setCity]= useState('')

const navigate = useNavigate()

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
      userId: "sadkoppps"
    }

    axios({
      method: 'post',
      url: `${URL_API}/api/hotels`,
      data: data_hotel
    })
    .then(res => {
      /* console.log(res) */
       /* let validationErr = res.data.message.join('\n') */
      if(res.data.success){
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'The data has been sent successfully'
        })
        return navigate('/hotels')
      } else {
        Swal.fire({
          icon: 'error',
          toast: true,
          text: res.data.message.join('\n'),
          
        })
      }
    })
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
