import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userAction";

const { signIn, reEnter, logout } = userActions;

const initialState = {
  photo: "",
  name: "",
  role: "",
  id: "",
  logged: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signIn.fulfilled, (state, action) => {
      console.log(action.payload.response);
      const { success, response } = action.payload;

      if (success) {
        let { user, token } = response;
        localStorage.setItem("token", token);
        localStorage.setItem("id", user._id);
        console.log("TOKEN REDUCER", token);
        let newState = {
          ...state,
          name: user.name,
          photo: user.photo,
          logged: user.logged,
          role: user.role,
          id: user._id,
        };
        console.log(user);
        console.log(newState);

        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };

        return newState;
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
                photo: user.photo,
                id: user.id,
                logged: user.logged,
                token: token,
                role: user.role
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
    .addCase(reEnter.fulfilled, (state, action) => {
      const { success, res } = action.payload;
      if (success) {
        let { user } = res;
        let newState = {
          ...state,
          name: user.name,
          photo: user.photo,
          logged: user.logged,
          role: user.role,
          id: user.id,
        };
        return newState;
      } else {
        let newState = {
          ...state,
          message: res,
        };
        return newState;
      }
    })
    .addCase(logout.fulfilled, (state, action) => {
      const { success } = action.payload;
      if (success) {
        return {  
            photo: "",
            name: "",
            role: "",
            id: "",
            logged: false
        };
      } else {
        let newState = {
          ...state,
        };
        return newState;
      }
    });
});

export default userReducer;
