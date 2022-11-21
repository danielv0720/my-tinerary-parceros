import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_API } from '../../api/url' 
import axios from "axios";

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

const hotelsActions = {
    getHotels
}

export default hotelsActions