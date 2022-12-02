import { createReducer } from "@reduxjs/toolkit";
import commentActions from "../actions/commentsAction";

const { getComments, addComment, editComment, deleteComment } = commentActions


const initialState = {
    comments: [],
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
    }).addCase(editComment.fulfilled, (state, action) => {
        let { response } = action.payload

        let newState = {
            ...state,
            comments: response
        }

        return newState
    }).addCase(deleteComment.fulfilled, (state, action) => {
        let newState = {
            ...state,
            comments : state.filter( item => item.id !== action.payload.id )
        }

        return newState
    } )
})

export default commentReducer