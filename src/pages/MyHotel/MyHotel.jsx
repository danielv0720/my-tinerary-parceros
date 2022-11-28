import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import hotelsAction from '../../redux/actions/hotelsAction'
import { Link as LinkRoute } from 'react-router-dom'


import '../../App.css'
import './MyHotel.css'
import '../../components/Card/Card.css'

const MyHotel = () => {
    const dispatch = useDispatch()
    const idAdmin = '636e8c06ce259ab0ebdb9813'
    const { getHotelAdmin, deleteHotel } = hotelsAction
    useEffect(() => {
        dispatch(getHotelAdmin(idAdmin))
    }, [idAdmin])
    const hotelsAdmin = useSelector(state => state.hotels.hotelsAdmin)

    let handleDelete = (id) => {
        dispatch(deleteHotel(id))
    }


    return (
        <div className=' container-admin d-flex align-center w-100 column grow'>
            <h1 className='title-admin' >My Hotels</h1>

            <div className="cards">
                {
                    hotelsAdmin.map(hotel => {
                        return <div className="card-citie-hotel shadow2">
                                    <img src={hotel.photo} alt={hotel.name} className="img-card" />
                                    <h4 className="title-card">
                                        {hotel.name}
                                    </h4>
                                    <div className="container_btn">
                                        <LinkRoute to={`/hotelsAdmin/${hotel._id}`} className="btn-edit" >Edit</LinkRoute>
                                        <button className='btn_delete' onClick={ () => handleDelete(hotel._id) } >Delete</button>
                                    </div>
                                </div>
                    })

                }
            </div>
        </div>

    )
}

export default MyHotel