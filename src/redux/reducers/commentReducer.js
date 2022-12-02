import { createReducer } from "@reduxjs/toolkit";
import commentActions from "../actions/commentsAction";

const { getComments, addComment } = commentActions


const initialState = {
    comemnts: [],
    id: '',
}

const commentReducer = createReducer(initialState, (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
        let newState = {
            ...state,
            comments: action.payload.res,
            id: action.payload.id
        }

        return newState
    }).addCase(addComment.fulfilled, (state, action) => {
        let { response } = action.payload

        let newState = {
            ...state,
            comments: response.data.response
        }

        return newState
    })
})

export default commentReducer