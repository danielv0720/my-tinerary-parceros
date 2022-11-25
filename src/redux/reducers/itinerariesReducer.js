import { types } from "../types/types";

const initialItinerariesState = {

  myItineraries: []
}

export const itinerariesReducer = (state = initialItinerariesState, action) => {
  switch (action.type) {
      
    // Cargar my itineraries
    case types.loadMyItineraries:
      return {
        ...state,
        myItineraries: [...action.payload]
      }

    // Eliminar itineraries
    case types.deleteItineraries:
      console.log(action.payload);
      return {
        ...state,
        myItineraries: state.myItineraries.filter(c => c._id !== action.payload)
      }

    // Actualizar itineraries
    case types.updateItineraries:
        return {
          ...state,
          myItineraries: state.myItineraries.map(mi => {
            if (mi._id === action.payload.id) {
              return {...action.payload.dataNewItinerary}
            } else {
              return mi
            }
          })
        }

    default:
      return state
  }
}