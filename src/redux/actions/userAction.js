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

        } else {
            Swal.fire({
                title: user.data.message.join('\n \n'),
                icon: 'error'
            })
        }
        return {
            success: true,
            response: user.data.response
        }

    } catch (err) {
        console.log(err.response)
        return {
            success: false,
            response: err.data.response.message
        }
    }
})

const userActions = {
    signIn
}

export default userActions