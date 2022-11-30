import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { URL_API } from '../../api/url'
import { Link as LinkRouter } from 'react-router-dom'

import '../../pages/Profile/ProfileStyle.css'
import '../../App.css'

const Profile = () => {

    const [ data, setData ] = useState([])
    const idUser = localStorage.getItem('id')


    console.log( 'id', idUser)
    useEffect(() => {
        if(idUser){
            axios.get(`${URL_API}/auth/me/${idUser}`)
            .then( res => {
                setData(res.data.res)
                console.log( "DATA:  ", res.data.res)
            } )
            .catch(err => console.log(err))
        }
    }, [idUser])


  return (
    <div className='d-flex column center align-center w-100 gap-5 container-profile' >
        <img src={data.photo} alt={data.name} className="img-profile" />
        <h2 className="title-profile">{data.name} {data.lastName} </h2>
        <p>{ data.email} </p>
        <p>{data.age}</p>
        <p>{data.role}</p>
        <LinkRouter to={`/profile/${data._id}`} className='btn-edit' >Edit Profile</LinkRouter>
    </div>
  )
}


export default Profile