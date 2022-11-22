import { types } from "../types/types";

const initialCitiesState = [];

export const citiesReducer = (state = initialCitiesState, action) => {
  switch (action.type) {
    case types.loadCities:
      return [...action.payload]
    

    //Aqui

    default:
      return state
  }
}