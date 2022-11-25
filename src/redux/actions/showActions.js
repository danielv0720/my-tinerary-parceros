import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_API } from "../../api/url";
import axios from "axios";
import Swal from "sweetalert2";

const getShowUser = createAsyncThunk('getShowUser', async (id) => {
    let apiUri = `${URL_API}/api/shows?userId=${id}`
    try {
     const res = await axios.get(apiUri)
     console.log(res)
     return { id : id, hotelsUser: res.data.res}
    } catch (err) {
        console.log('error', err)
        return {
            payload: err
        }
    }
})

const deleteShow = createAsyncThunk('deleteShow', async (id) => {
    let apiUri = `${URL_API}/api/shows/${id}`

    try {
        const res = axios.delete(apiUri)
        if(res.data.success){
            Swal.fire({
                title: 'Deleted successfully',
                icon: 'success'
            })
            return { id: id, res: res.data }
        } else {
            Swal.fire({
                title: 'The hotel could not be deleted',
                icon: 'error'
            })
        }
    } catch (err) {
        console.log('error', err)
        return {
            payload: err
        }
    }
})
            
 

const showsActions = {
    getShowUser,
    deleteShow
}

export default showsActions