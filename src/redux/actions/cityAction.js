import axios from "axios";
import { URL_API } from "../../api/url";
import { types } from "../types/types"


export const startSaveCities = () => {
  return async (dispatch) => {
    const cities = (await axios.get(`${URL_API}/api/cities`)).data.response;
    console.log(cities);
    dispatch(saveCities(cities))
  }
}

export const startSaveCitiesWithFilter = (path) => {
  return async (dispatch) => {
    const cities = (await axios.get(path)).data.response;
    console.log(cities);
    dispatch(saveCities(cities))
  }
}


export const saveCities = (cities) => {
  return {
    type: types.loadCities,
    payload: cities
  }
}


//Aqui
