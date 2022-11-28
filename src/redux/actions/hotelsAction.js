import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_API } from '../../api/url' 
import axios from "axios";
import Swal from "sweetalert2";

const getHotels = createAsyncThunk('getHotels', async (value) => {
    let apiUri = `${URL_API}/api/hotels?name=${value.input}&order=${value.select}`
   try {
    const res = await axios.get(apiUri)
    

    return { value : value, hotels: res.data.response}
   } catch (err) {
        console.log('error', err)
        return {
            payload: err
        }
   }
   
})

const getHotelAdmin = createAsyncThunk('getHotelAdmin', async (id) => {
    let apiUri = `${URL_API}/api/hotels?userId=${id}`
   try {
    const res = await axios.get(apiUri)
    

    return { id : id, hotelsAdmin: res.data.response}
   } catch (err) {
        console.log('error', err)
        return {
            payload: err
        }
   }
   
})

const deleteHotel = createAsyncThunk('deleteHotel', async (id) => {
    let apiUri = `${URL_API}/api/hotels/${id}`
    try {
        const res = await axios.delete(apiUri)

        if (res.data.success){
            Swal.fire({
                title: 'Deleted successfully',
                icon: 'success'
            })

            return { id: id, res : res.data }
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


const hotelsActions = {
    getHotels,
    getHotelAdmin,
    deleteHotel
}

export default hotelsActions