import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL_API } from '../../api/url'
import Swal from 'sweetalert2'
import axios from 'axios'

import '../../App.css'
import '../ShowEdit/ShowEdit.css'

const ShowEdit = () => {

    const {id} = useParams() 
    console.log("ID", id)

    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
/*     const [hotel, setHotel] = useState('') */

    useEffect(()=>{
        axios.get(URL_API+'/api/shows/'+id)
             .then(res => {
                setName(res.data.name)
                setPhoto(res.data.photo)
                setDate(res.data.date)
                setPrice(res.data.price)
                setDescription(res.data.description)
             })
             .catch(err => console.log(err) )
    }, [id])


    let patchHandler = (e) => {
        e.preventDefault()

        let dataUpdate = {
            name: name,
            description: description,
            photo: photo,
            price: price,
            date: date
        }

        let token =localStorage.getItem('token')
        console.log("TOKEN SHOW",  token)
        let headers = { headers: { Authorization : 'Bearer '+token }}

        axios.patch(`${URL_API}/api/shows/${id}`, dataUpdate, headers )
              .then(res => {
                console.log(res)
                if(res.data.success){
                    Swal.fire({
                        title: 'Show edit successfully',
                        icon: 'success'
                    })
                    console.log(res.data)
                } else {
                    Swal.fire('ERROR', 'Error Cannot to update this show', 'error' )
                }
              })
    }

  return (
    <div className='d-flex h-100vh center align-center w-100'>
    <form className="form_hotel" onSubmit={patchHandler} >
        <input 
            type="text" 
            value={name} 
            name="Name" 
            placeholder='Name' 
            className='input-hotel' 
            onChange={(e) => setName(e.target.value)} 
        />
        <input 
            type="url" 
            value={photo} 
            name="Photo" 
            placeholder='Photo (URL)' 
            className='input-hotel' 
            onChange={(e) => setPhoto(e.target.value)}  
        />
        <input 
            type="date" 
            name="date"
            value={date}
            className='input-hotel'
            onChange={(e) => setDate(e.target.value)}
        />
        <input type="text" 
            value={price} 
            name="Price" 
            placeholder='Price' 
            className='input-hotel' 
            onChange={(e) => setPrice(e.target.value)}  
        />
        <input type="text" 
            value={description} 
            name="Description" 
            placeholder='Description' 
            className='input-hotel' 
            onChange={(e) => setDescription(e.target.value)}  
        />
     {/*    <input type="text" 
            value={hotel} 
            name="Hotel" 
            placeholder='Hotel' 
            className='input-hotel' 
            onChange={(e) => setHotel(e.target.value)}  
        /> */}
        <div className="container_submit">
            <button type="submit" className='btn_submit' >Update</button>
        </div>
    </form>
</div>
  )
}

export default ShowEdit