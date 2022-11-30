
import { types } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_API } from "../../api/url";
import axios from "axios";
import Swal from "sweetalert2";


export const login = (user) => ({
  type: types.login,
  payload: user
})


export const logout = () => ({
  type: types.logout
})


const signIn = createAsyncThunk('signIn', async (data)=>{


    let uri = `${URL_API}/auth/sign-in`

    try {
        let user = await axios.post(uri, data)
       
        console.log(user.data.response)
        if(user.data.success){
            Swal.fire({
                title: 'User logged',
                icon: 'success'
            })

            return {
                success: true,
                response: user.data.response
            }

        } else {
            Swal.fire({
                title: user.data.message.join('\n \n'),
                icon: 'error'
            })
        }

    } catch (err) {
       // console.log(err.response)
        return {
            success: false,
            response: err.data.response.message
        }
    }
})


const reEnter = createAsyncThunk('reEnter', async (token) => {
    let endpoint = `${URL_API}/auth/token`
    let headers = { headers: { 'Authorization' : `Bearer ${token}` } } 
    try {
        let user = await axios.post(endpoint, null, headers)
        console.log( "Response REENTER", user.data.response)
        console.log("User data", user.data)
        return {
            success: true,
            res: {
               user: user.data.response.user,
               token
            }
        }

    } catch (err) {
        console.log(err.response)
        return {
            success: false,
            response: err.response.data.message
        }
    }
})

const userActions = {
    signIn,
    reEnter
}



export default userActions
