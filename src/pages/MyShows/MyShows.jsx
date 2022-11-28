import React, { useEffect } from 'react'
import showsActions from '../../redux/actions/showActions'
import { useSelector, useDispatch } from 'react-redux'
import { Link as LinkRoute } from 'react-router-dom'

import '../../App.css'
import '../MyShows/MyShows.css'

const MyShows = () => {

    const dispatch = useDispatch()
    const idUser = '636d864fec3e352a19f44e9f'
    const { getShowUser, deleteShow } = showsActions

    useEffect(()=>{
        dispatch(getShowUser(idUser))
    }, [idUser])

    const showUser = useSelector(state => state.shows.showsByUser)

    let handleDelete = (id) => {
        dispatch(deleteShow(id))
    }

  return (
    <div className=' container-admin d-flex align-center w-100 column grow'>
    <h1 className='title-admin' >My Shows</h1>

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
                                <button className='btn_delete' onClick={() => handleDelete(show._id)} >Delete</button>
                            </div>
                        </div>
            })

        }
    </div>
</div>
  )
}

export default MyShows