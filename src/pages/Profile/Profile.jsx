import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { URL_API } from '../../api/url'


import '../../pages/Profile/ProfileStyle.css'
import '../../App.css'

const Profile = () => {

    const [ data, setData ] = useState([])
    const id = "63836e7978735a0b909cbc69"
    console.log( 'id', id)
    useEffect(() => {
        axios.get(`${URL_API}/auth/me/${id}`)
            .then( res => {
                setData(res.data.res)
                console.log(res.data.res)
            } )
            .catch(err => console.log(err))
    }, [id])


  return (
    <div className='d-flex column center align-center w-100 gap-5 container-profile' >
        <img src={data.photo} alt={data.name} className="img-profile" />
        <h2 className="title-profile">{data.name} {data.lastName} </h2>
        <p>{ data.email} </p>
        <p>{data.age}</p>
        <p>{data.role}</p>
    </div>
  )
}

export default Profile