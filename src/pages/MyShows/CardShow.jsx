import React, { useState, useEffect } from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import './MyShows.css'
import '../../App.css'
import CommentsList from '../../components/CommentBox/CommentsList'
import '../../components/CommentBox/Comment.css'
const CardShow = (props) => {




    const { photo, name, id, handle, token, reload, setReload} = props
    const [ open, setOpen ] = useState(false)

    useEffect(()=> {
    },[open])

    return (
        <>
            <div className="card-show-show shadow1">
                <img src={photo} alt={name} className="img_card_show" />
                <h4 className="title-card-show">
                    {name}
                </h4>
                <div className="container_btn">
                    <LinkRoute to={`/showsUser/${id}`} className="btn_edit" >Edit</LinkRoute>
                    <button className='btn_delete' onClick={async ()=> {
                                            await handle(id, token)
                                            setReload(!reload)
                                            console.log(reload)
                                        }} >Delete</button>
                </div>
                <div className='container_comment' >
                     <button className='btn_toggle_comment'  onClick={()=> setOpen(!open)}  >Comments</button>
                    {  open? <CommentsList showId={id}/> : ''  }
                </div>
            
            </div>
    
            
    
        </>
  )
}

export default CardShow