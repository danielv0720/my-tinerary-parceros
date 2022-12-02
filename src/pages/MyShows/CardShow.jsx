import React, { useState } from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import './MyShows.css'
import CommentsList from '../../components/CommentBox/CommentsList'
const CardShow = (props) => {

    const { photo, name, id, handle, token, reload, setReload} = props
    const [ open, setOpen ] = useState(false)

  return (
   <>
     <div className="card-show-show shadow2">
    <img src={photo} alt={name} className="img_card_show" />
    <h4 className="title-card">
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
    </div>
    
    <div className='container_comment' >
    <button className='btn_toggle_comment'  onClick={()=> setOpen(!open)}  >comments</button>
        { open? <CommentsList id={id} /> : ''  }
    </div>
    
   </>
  )
}

export default CardShow