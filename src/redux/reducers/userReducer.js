
import { types } from "../types/types";
import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userAction";

const { signIn, reEnter } = userActions

const initialState = {
    photo: '',
    name: '',
    token: '',
    role: '',
    id: '',
    logged: false
}
/* export const userReducer = (state = {}, action)=> {
  switch (action.type) {
    case types.login:
      return {
        name: action.payload.name,
        role: action.payload.role,
        photo: action.payload.photo
      }

      case types.logout:
        return {}
        
    default:
      return state;
  }
} */



const userReducer = createReducer( initialState, (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
        console.log(action.payload.response)
        const { success, response } = action.payload

        if(success){
            let { user,token } = response
            localStorage.setItem('token', token)
            localStorage.setItem('id', user._id)
            console.log("TOKEN REDUCER", token)
            let newState = {
                ...state,
                name: user.name,
                photo: user.photo,
                logged: user.logged,
                token: user.token,
                role: user.role,
                id: user._id
            }
            console.log(user)
            console.log(newState)

            return newState
        } else {
            let newState = {
                ...state,
                message: response
            }

            return newState
        }
    } )
    .addCase(reEnter.fulfilled, (state, action)=>{
        const { success, res } = action.payload
        if(success){
            let { user, token } = res
            let newState = {
                ...state,
                name: user.name,
                photo: user.foto,
                id: user.id,
                logged: user.logged,
                token: token
            }
            return newState
        }else {
            let newState = {
                ...state,
                message: res
            }
            return newState
        }

    })
} )




export default userReducer

