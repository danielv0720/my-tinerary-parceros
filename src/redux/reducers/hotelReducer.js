import { createReducer } from "@reduxjs/toolkit";

import hotelsActions from '../actions/hotelsAction'

const { getHotels } = hotelsActions

const initialState = {
    query : '',
    order: '',
    hotels: []
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
})


export default hotelsReducer