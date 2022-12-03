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
      console.log(iteneraryIndex);
      const reactionIndex = [...state.itineraryReaction][iteneraryIndex].reactions.findIndex(r => r.name === action.payload.reactionName)
      console.log(reactionIndex);
      const userIndex = [...state.itineraryReaction][iteneraryIndex].reactions[reactionIndex].userId.findIndex(u => u === action.payload.userId)
      console.log(userIndex);

      state.itineraryReaction[iteneraryIndex].reactions[reactionIndex].userId.splice(userIndex, 1);
    },


    deleteMyReactions(state, action) {
      let index;
      for (let i = 0; i < state.myReactions.length; i++) {
        const element = state.myReactions[i];
        const iteneraryId = element.itinerary[0]._id
        const reactionName =  element.reaction.name
        if ((action.payload.iteneraryId === iteneraryId) && (action.payload.reactionName === reactionName)) {
          index = i
        }
      }

      state.myReactions.splice(index, 1);
    }
  },
})

export const { loadReactions, updateReaction, deleteReactions, loadMyReactions, deleteMyReactions } = reactionSlice.actions
export default reactionSlice.reducer