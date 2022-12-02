import React, { useEffect, useState } from 'react'
import './CommentList.css'
import commentActions from '../../redux/actions/commentsAction';
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';

const CommentsList = (props) => {

  const [value, setValue] = useState("")


  const { id } = props
  console.log("id SHOW", id)
  const { getComments, addComment } = commentActions
  const dispatch = useDispatch()
 const { comments } = useSelector(state => state.comments)

  useEffect(() => {
    dispatch(getComments(id))
  }, [dispatch])

  console.log(value)


  const user = useSelector(state => state.users)

  let addCommentHandle = async (e) => {
      e.preventDefault()
    let data = {
      token: user.token,
      dataComment: {
        showId: id,
        date: new Date(),
        comment : value
      } 
    }
   await  dispatch(addComment(data))
    dispatch(getComments(id))
    setValue('')
}

  return (
    <>
      <div className="container-comment">
        {
          comments?.map(comment => {
            return (<div className='list_container'>
                      <img src={user.photo} alt={user.name} className='img-comment' />
                     <div className="comment-text-date">
                      <p  className='date-comment' >{comment.date} </p>
                     <p className='text-comment'>{comment.comment}</p>
                     </div>
                      <div className="container-icons">
                        <button className='btn-comment-item' ><AiOutlineEdit className='edit-comment' /></button>
                        <button className='btn-comment-item' ><AiFillDelete className='edit-delete' /></button>
                      </div>
                    </div>)
                  })
               }

      </div>
      <form className="container-form-comments" onSubmit={addCommentHandle}>
        <textarea
          name="Comment"
          id="" cols="30"
          rows="5"
          placeholder='Add a comment'
          onChange={(e) => setValue(e.target.value)} 
          value={value}
          >
        </textarea>
        <button type='submit' className='add-comment' >Send comment</button>
      </form>

    </>
  )
}

export default CommentsList