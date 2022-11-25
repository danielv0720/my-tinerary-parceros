import { createReducer } from "@reduxjs/toolkit";

import hotelsActions from '../actions/hotelsAction'

const { getHotels, getHotelAdmin, deleteHotel } = hotelsActions

const initialState = {
    query : '',
    order: '',
    hotels: [],
    id: '',
    hotelsAdmin: []
}

const hotelsReducer = createReducer(initialState, (builder) => {
    builder.addCase(getHotels.fulfilled, (state, action) => {

        let newState = {
            ...state,
            query: action.payload.value.input,
            order: action.payload.value.select,
            hotels: action.payload.hotels
        }

        return newState
    } )
        .addCase(getHotelAdmin.fulfilled, (state, action) => {
            let newState = {
                ...state,
                id : action.payload.id,
                hotelsAdmin: action.payload.hotelsAdmin
            }

            return newState
        })
        .addCase(deleteHotel.fulfilled, (state, action)=>{
            let newState = {
                ...state,
                hotelsAdmin: state.filter(item => item._id !== action.payload.id )
            }
            return newState
        })
})


export default hotelsReducer