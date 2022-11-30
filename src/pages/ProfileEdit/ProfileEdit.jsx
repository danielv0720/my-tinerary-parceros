import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../ProfileEdit/ProfileEdit.css'
import '../../App.css'
import { URL_API } from '../../api/url'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const ProfileEdit = () => {

    
    let {id} = useParams()
    console.log( "ID USER: " ,id)

    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ photo, setPhoto ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ age, setAge ] = useState(0)


    useEffect(()=>{
        axios.get(`${URL_API}/auth/me/${id}`)
             .then(res => {
                setName(res.data.name)
                setLastName(res.data.lastName)
                setPhoto(res.data.photo)
                setEmail(res.data.email)
                setAge(res.data.age)
             })
             .catch(err => console.log(err))
    }, [id])
 
    let token = localStorage.getItem('token')

    let patchHandler = (e) => {
        e.preventDefault()

        let dataInputs = {
            name,
            lastName,
            photo,
            email,
            age
        }

        let api = `${URL_API}/auth/me/${id}`

        let headers = { headers: { 'Authorization' : `Bearer ${token}`} }

        axios.patch(api, dataInputs, headers)
            .then(res => {
                
                if(res.data.success){
                    Swal.fire({
                        title: 'Profile Updated Successfully!!',
                        icon: 'success'
                    })
                    console.log(res.data)
                } else {
                    Swal.fire({
                        title: 'The profile cannot update',
                        icon: 'error'
                    })
                }
            }).catch(err => {
                console.log(err)
            })
    }

  return (
    <div className='d-flex h-100vh center align-center w-100'>
    <form className="form_profile" onSubmit={patchHandler} >
        <input 
            type="url" 
            value={photo} 
            name="Photo" 
            placeholder='Photo (URL)' 
            className='input-profile' 
            onChange={(e) => setPhoto(e.target.value)}  
        />
        <input 
            type="text" 
            value={name} 
            name="Name" 
            placeholder='Name' 
            className='input-profile' 
            onChange={(e) => setName(e.target.value)} 
        />
        <input 
            type="text" 
            value={lastName} 
            name="lastName" 
            placeholder='lastName' 
            className='input-profile' 
            onChange={(e) => setLastName(e.target.value)}  
        />
        <input type="text" 
            value={email} 
            name="Email" 
            placeholder='Email' 
            className='input-profile' 
            onChange={(e) => setEmail(e.target.value)}  
        />
        <input type="text" 
            value={age} 
            name="Age" 
            placeholder='Age' 
            className='input-profile' 
            onChange={(e) => setAge(e.target.value)}  
        />
        <div className="container_submit">
            <button type="submit" className='btn_submit' >Update</button>
        </div>
    </form>
</div>
  )
}

export default ProfileEdit