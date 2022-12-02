import React, { useEffect, useState } from 'react'
import showsActions from '../../redux/actions/showActions'
import { useSelector, useDispatch } from 'react-redux'
import { Link as LinkRoute } from 'react-router-dom'

import '../../App.css'
import '../MyShows/MyShows.css'

import CardShow from './CardShow'


const MyShows = () => {

    const [ reload, setReload ] = useState(false)

    console.log(reload)

    const dispatch = useDispatch()
    const idUser = localStorage.getItem('id')
    console.log( "My ID", idUser)
    const { getShowUser, deleteShow } = showsActions
    let token = localStorage.getItem('token')

    const showUser = useSelector(state => state.shows.showsByUser)

    
    useEffect(()=>{
        dispatch(getShowUser(idUser))

    }, [idUser, dispatch, getShowUser])

    }, [ reload, idUser])


    let dataDelete = {
        id : "",
        token: ""
    }
    let handleDelete = async (id, token) => {
       try {
         dataDelete = {
            id : id,
            token: token
         }
         await  dispatch(deleteShow(dataDelete))

       } catch (error) {
        console.log(error)
       }

    }

  return (
    <div className=' container-admin d-flex align-center w-100 column grow gap-5'>
    <h1 className='title-admin' >My Shows</h1>
    <LinkRoute to={`/newShow`}  className='btn-new_show' >New show</LinkRoute>

    <div className="cards">
        <div className="container_scroll">
        {
            showUser.map(show => 
                    (<CardShow 
                        photo={show.photo} 
                        name={show.name} 
                        id={show._id} 
                        handle={() => handleDelete(show._id, token)}
                        reload={ reload }
                        setReload={setReload}
                        token={token}
                    />
                    ))
        }
        </div>
    </div>
</div>
  )
}

export default MyShows