import React, { useEffect } from 'react'
import showsActions from '../../redux/actions/showActions'
import { useSelector, useDispatch } from 'react-redux'
import { Link as LinkRoute } from 'react-router-dom'

import '../../App.css'
import '../MyShows/MyShows.css'

const MyShows = () => {

    const dispatch = useDispatch()
    const idUser = localStorage.getItem('id')
    const { getShowUser, deleteShow } = showsActions
    let token = localStorage.getItem('token')

    useEffect(()=>{
        dispatch(getShowUser(idUser))
    }, [idUser, dispatch, getShowUser])

    const showUser = useSelector(state => state.shows.showsByUser)
    let dataDelete = {
        id : "",
        token: ""
    }
    let handleDelete = (id, token) => {
        dataDelete = {
            id : id,
            token: token
        }
        dispatch(deleteShow(dataDelete))
    }

  return (
    <div className=' container-admin d-flex align-center w-100 column grow gap-5'>
    <h1 className='title-admin' >My Shows</h1>
    <LinkRoute to={`/newShow`}  className='btn-new_show' >New show</LinkRoute>

    <div className="cards">
        {
                showUser.map(show => {
                    return <div className="card-citie-hotel shadow2">
                                <img src={show.photo} alt={show.name} className="img-card" />
                                <h4 className="title-card">
                                    {show.name}
                                </h4>
                                <div className="container_btn">
                                    <LinkRoute to={`/showsUser/${show._id}`} className="btn-edit" >Edit</LinkRoute>
                                    <button className='btn_delete' onClick={() => handleDelete(show._id, token)} >Delete</button>
                                </div>
                            </div>
                })
    

        }
    </div>
</div>
  )
}

export default MyShows