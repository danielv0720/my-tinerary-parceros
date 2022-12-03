import React, { useEffect, useState } from 'react'
import './CommentList.css'
import commentActions from '../../redux/actions/commentsAction';
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const CommentsList = (props) => {

  const [value, setValue] = useState("")
 

  const { showId } = props 
   
  console.log("id SHOW", showId)
  const { getComments, addComment, editComment, deleteComment } = commentActions
  const dispatch = useDispatch()

  const { comments, id } = useSelector(state => state.comments)
/*    console.log("ID comentario", comments._id) */
  

  console.log( "COMMENT", comments )
  useEffect(() => {
    dispatch(getComments(showId))
  }, [dispatch])

  console.log(value)


  const user = useSelector(state => state.users)
console.log(user.token);
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


    let handleEdit =  async (idComment) => {
      
      const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      
      if (text) {
        Swal.fire(text)

        let dataComment = {
          id:  idComment,
          comment: {comment : text},
          date: new Date(),
          token: user.token
        }
        console.log(dataComment)
       await dispatch(editComment(dataComment))
     
       
      }
     
    }

    let handleDelete = (id)=>{

      let data = {
        token: user.token,
        id: id
      }

      dispatch(deleteComment(data))
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
                         
                           {
                            user.logged ? 
                               ( 
                                      <>
                                        <div className="container-icons">
                                          <button className='btn-comment-item' 
                                            id={comment._id} 
                                            onClick={() => handleEdit(comment._id) }>
                                            <AiOutlineEdit className='edit-comment'/>
                                          </button>
                                          <button className='btn-comment-item'  
                                          onClick={ () => handleDelete(comment._id)} >
                                            <AiFillDelete className='edit-delete'/>
                                          </button>
                                        </div>
                                      </>
                                      )
                              : ''
                            }
                        
                      
                    </div>)
                  })
            }

      <form className="container-form-comments" onSubmit={ addCommentHandle }>
        <textarea
          name="Comment"
          cols="30"
          rows="5"
          placeholder='Add a comment'
          onChange={(e) => setValue(e.target.value)} 
          value={value}
          >
        </textarea>
        <button type='submit' className='add-comment' > Send comment </button>
      </form>
      </div> 

    </>
  )
}

export default CommentsList