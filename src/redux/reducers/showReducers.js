import { createReducer } from "@reduxjs/toolkit";
import showsActions from "../actions/showActions";

const { getShowUser, deleteShow } = showsActions

const initialState = {
    showsByUser: [],
    id: '' 
}

const showsReducer = createReducer(initialState, (builder) => {
    builder.addCase(getShowUser.fulfilled, (state, action) => {
        let newState = {
             ...state,
            showsByUser: action.payload.hotelsUser,
            id: action.payload.id
        }
        return newState
    })
    .addCase(deleteShow.fulfilled,(state, action) => {
        let newState = {
            ...state,
             showsByUser: state.filter(item => item._id !== action.payload.id )
        }
        return newState
    } )
})

export default showsReducer