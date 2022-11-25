import { types } from "../types/types";

const initialCitiesState = {
  cities: [],
  myCities: []
}

export const citiesReducer = (state = initialCitiesState, action) => {
  switch (action.type) {
    // Cargar cities
    case types.loadCities:
      return {
        ...state,
        cities: [...action.payload]
      }
      
    // Cargar my cities
    case types.loadMyCities:
      return {
        ...state,
        myCities: [...action.payload]
      }

    // Eliminar cities
    case types.deleteCity:
      console.log(action.payload);
      return {
        ...state,
        myCities: state.myCities.filter(c => c._id !== action.payload)
      }

    // Actualizar cities
    case types.updateCity:
        return {
          ...state,
          myCities: state.myCities.map(mc => {
            if (mc._id === action.payload.id) {
              return {...action.payload.dataNewCity}
            } else {
              return mc
            }
          })
        }

    default:
      return state
  }
}