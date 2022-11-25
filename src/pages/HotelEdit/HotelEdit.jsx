import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { URL_API } from '../../api/url'
import Swal from 'sweetalert2'

import '../../App.css'
import '../HotelEdit/HotelEdit.css'


const HotelEdit = () => {

    const { id } = useParams()
    console.log('ID', id)

    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [capacity, setCapacity] = useState(0)
    const [city, setCity] = useState('')

    useEffect(()=>{
        axios.get(URL_API+'/api/hotels/'+id)
            .then(res => {
                setName(res.data.name)
                setPhoto(res.data.photo)
                setCapacity(res.data.capacity)
                setCity(res.data.cityId)
            })
            .catch(err => console.log(err) )
    }, [id])

    let patchHandler = (e) => {
        e.preventDefault()

        let valueInputs = {
            name : name,
            photo : photo,
            capacity: capacity,
            city: city
        }

        axios.patch(`${URL_API}/api/hotels/${id}`, valueInputs)
            .then(res => {
                console.log(res)
                if(res.data.success){
                    Swal.fire({
                        title: 'Hotel edit successfully',
                        icon: 'success'
                    })
                } else {
                    Swal.fire('ERROR', 'Erro. Cannot to update this hotel', 'error' )
                }
            })
            .catch(err => {
                console.log(err)
                
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
                    type="text" 
                    value={capacity} 
                    name="Capacity" 
                    placeholder='Capacity' 
                    className='input-hotel' 
                    onChange={(e) => setCapacity(e.target.value)}  
                />
                <input type="text" 
                    value={city} 
                    name="City" 
                    placeholder='City' 
                    className='input-hotel' 
                    onChange={(e) => setCity(e.target.value)}  
                />
                <div className="container_submit">
                    <button type="submit" className='btn_submit' >Update</button>
                </div>
            </form>
        </div>
    )
}

export default HotelEdit