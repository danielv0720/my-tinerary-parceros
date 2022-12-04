import React, { useState } from 'react'
import NewHotel from './NewHotel'
import NewHotelButton from './NewHotelButton'
import { URL_API } from '../../api/url'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import './NewHotel.css'

export default function NewHotelCreate() {

  /* useEffect(()=>{
   Swal.fire()
  },[]) */

  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [capacity, setCapacity] = useState(0)
  const [city, setCity] = useState('')

  const navigate = useNavigate()

  let data_hotel = {
    name: "",
    photo: "",
    capacity: 0,

  }


  let token = localStorage.getItem('token')

  /*  axios({
      method: 'post',
      url: `${URL_API}/api/hotels`,
      data: data_hotel,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
 */

    let headers = { headers:{ 'Authorization': `Bearer ${token}`} }
    let idUser = localStorage.getItem('id')
  const handleSubmit = (e) => {
    e.preventDefault()

    data_hotel = {
      name: name,
      photo: photo,
      capacity: capacity,
      cityId: city,
      userId: idUser
    }


   



    axios.post(`${URL_API}/api/hotels`, data_hotel, headers)
      .then(res => {
        console.log(res.data.success)
        console.log(res.data.message)
        if (res.data.success) {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
          })


          return navigate('/hotels')
        }
        else {
          let toast = Swal.mixin({
            toast: true,         
            showConfirmButton: false,
            allowOutsideClick: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            timer: 3000,
            timerProgressBar: true
          })

          let errorMsg = res.data.message            
            toast.fire({
              title: errorMsg.join('\n\n'),
              icon: 'error',
              customClass: {
                title: 'msgErr'
              }
            })

            
        }
      })
      .catch(err => {
        console.log(err)
      })


  }


  return (
    <div className='container-new-hotel' >


      <form className='create_form' onSubmit={handleSubmit}>
        <h2>Create new hotel</h2>
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
    </div>
  )
}
