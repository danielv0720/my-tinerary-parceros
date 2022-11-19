import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import '../HotelDetail/HotelDetail.css'

import '../../App.css'
import { URL_API } from '../../api/url'
import Card from '../../components/Card/Card'

const HotelDetail = () => {

    const [hotel, setHotel] = useState([])
    const [ shows, setShows ] = useState([])
    let { idDetail } = useParams()
    useEffect(() => {
        axios.get(`${URL_API}/api/hotels/${idDetail}`)
            .then(res => setHotel(res.data.res))
            .catch(err => console.log(err))

        axios.get(`${URL_API}/api/shows?hotelId=${idDetail}`)
            .then( res =>  setShows(res.data.res))
    }, [])

  /*   console.log(shows) */


    return (
        <div className='container-detail w-100 d-flex center align-center column gap-5' >
            <div className="card_detail--hotel shadow1">
                <img src={hotel.photo} alt="image-hotel" className='img-hotel__detail' />
                <h3 className="title">{hotel.name}</h3>
                <p className="paragraph"><b>Capacity: </b> {hotel.capacity} </p>
            </div> 
            <hr className='linea' />
            <div>
                <h2 className='title_shows' >Shows and events: </h2>
            </div>
            <div className="cards-shows">
                { 
                    shows.map(show => {
                         return <Card key={show._id} img={show.photo} name={show.name} />
                    } )
                }
            </div>
        </div>
        )
}

export default HotelDetail