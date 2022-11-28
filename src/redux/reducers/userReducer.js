import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userAction";

const { signIn } = userActions

const initialState = {
    photo: '',
    name: '',
    token: '',
    role: '',
    logged: false
}

const userReducer = createReducer( initialState, (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
        console.log(action.payload.response)
        const { success, response } = action.payload

        if(success){
            let { user,token } = response
            localStorage.setItem('token', JSON.stringify(token))

            let newState = {
                ...state,
                name: user.name,
                photo: user.photo,
                logged: user.logged,
                token: user.token,
                rol: user.rol
            }

            return newState
        } else {
            let newState = {
                ...state,
                message: response
            }

            return newState
        }
    } )
} )

export default userReducer