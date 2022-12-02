
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_API } from "../../api/url";
import axios from "axios";
import Swal from "sweetalert2";



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
        console.log("User data", user)
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

const logout = createAsyncThunk('logout', async (token) => {
    let endpoint = `${URL_API}/auth/signout`
    let headers = { headers: { 'Authorization' : `Bearer ${token}` } } 
    try {
        let res = await axios.put(endpoint, null, headers)
        console.log( "Response logout", res)
        localStorage.clear()
        return {
            success: true
        }

    } catch (err) {
        console.log(err.response)
        return {
            success: false,
        }
    }
})

const userActions = {
    signIn,
    reEnter,
    logout
}



export default userActions
