import { createAsyncThunk } from '@reduxjs/toolkit'
import { URL_API } from '../../api/url' 
import axios from "axios";
import Swal from "sweetalert2";



const getComments = createAsyncThunk('getComments', async (id) => {
    let api = `${URL_API}/api/comments?showId=${id}`

    try {
        const comments = await axios.get(api) 
        if(comments.data.success){
            console.log(comments.data.response)
            return {
                id: id,
                res: comments.data.response
            }
        }

    } catch (err) {
        return {
            payload: err
        }
    }
})

const addComment = createAsyncThunk('addComment', async (data)=>{
    let api = `${URL_API}/api/comments`

    try {   

        let headers = { headers: { 'Authorization' : `Bearer ${data.token}` } }
        let res = await axios.post(api, data.dataComment, headers)
        
        if(res.data.success){
            console.log(res)
            Swal.fire({
                title: 'Comment added successfully',
                icon: 'success'
            })

            return {
                success: true,
                response: res.data.response
             }
        } else {
            Swal.fire({
                title: res.data.message.join('\n \n'),
                icon: 'error'
            })
        }

    } catch (err) {
        return {
            success: false,
            message: err
        }
    }

})


const editComment = createAsyncThunk('editComment', async (data) => {
    let url = `${URL_API}/api/comments/${data.id}`
    let headers = { headers: { 'Authorization' : `Bearer ${data.token}` } }

    let res = await axios.put(url, data.comment,headers)

    try {
        if(res.data.success){
            console.log("RES comment", res)
            console.log("DATA comment", res.data)
            Swal.fire({
                title: res.data.message,
                icon: 'success'
            })
    
            return { response : res.data.response, success : true  }
        } else {
            console.log(res.data)
            Swal.fire({
                title: 'Cannot edit this comment',
                icon: 'error'
            })
        }
    
    } catch (err) {
        return {
            payload: err
        }
    }
    
})

   const deleteComment = createAsyncThunk('deleteComment', async (data) => {
        let api = `${URL_API}/api/comments/${data.id}`

        let headers = { headers: { 'Authorization' : `Bearer ${data.token}` } }

        try {
            let comment = await axios.delete(api, headers)
            if(comment.data.success){
                console.log("comment deleted", comment.data)
                Swal.fire({
                    title: "Comment deleted successfully",
                    icon: "success"
                })

                return {
                    response: comment.data.response,
                    success: true,
                    id: data.id
                }
            } else {
                Swal.fire({
                    title: "Comment is not deleted",
                    icon: "error"
                })
            }
        } catch (err) {
            return {
                payload: err
            }
        }
   })


const commentActions = {
    addComment,
    getComments,
    editComment,
    deleteComment
}

export default commentActions

