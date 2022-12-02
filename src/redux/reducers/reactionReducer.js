import { createSlice } from "@reduxjs/toolkit";


const initialReactionsState = {
  itineraryReaction: [],
  myReactions: []
}

const reactionSlice = createSlice({
  name: 'reaction',
  initialState: initialReactionsState,
  reducers: {
    loadMyReactions(state, action) {
      state.myReactions = action.payload
    },

    loadReactions(state, action) {
      state.itineraryReaction.push({id: action.payload.id, reactions: action.payload.itineraryReaction})
    },
    updateReaction(state, action) {
      const iteneraryIndex = [...state.itineraryReaction].findIndex(i => i.id === action.payload.iteneraryId)
      const reactionIndex = [...state.itineraryReaction][iteneraryIndex].reactions.findIndex(r => r.name === action.payload.reactionName)
      state.itineraryReaction[iteneraryIndex].reactions[reactionIndex].userId.push(action.payload.userId);
    },

    deleteReactions(state, action) {
      console.log(action.payload.iteneraryId);
      console.log(action.payload.reactionName);
      const iteneraryIndex = [...state.itineraryReaction].findIndex(i => i.id === action.payload.iteneraryId)
      const reactionIndex = [...state.itineraryReaction][iteneraryIndex].reactions.findIndex(r => r.name === action.payload.reactionName)
      const userIndex = [...state.itineraryReaction][iteneraryIndex].reactions[reactionIndex].userId.findIndex(u => u === action.payload.userId)

      state.itineraryReaction[iteneraryIndex].reactions[reactionIndex].userId.splice(userIndex, 1);
    }
  },
})

export const { loadReactions, updateReaction, deleteReactions, loadMyReactions } = reactionSlice.actions
export default reactionSlice.reducer