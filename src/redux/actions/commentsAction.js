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

const commentActions = {
    addComment,
    getComments
}

export default commentActions

