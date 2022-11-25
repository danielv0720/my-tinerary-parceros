import axios from "axios";
import Swal from "sweetalert2";
import { URL_API } from "../../api/url";
import { types } from "../types/types"



// ------------------- Obtener cities con o sin filtros ------------------- 

// Con filtros

// Middleware
export const startSaveCities = () => {
  return async (dispatch) => {
    const cities = (await axios.get(`${URL_API}/api/cities`)).data.response;
    console.log(cities);
    dispatch(saveCities(cities))
  }
}

// Sin filtros

// Middleware
export const startSaveCitiesWithFilter = (path) => {
  return async (dispatch) => {
    const cities = (await axios.get(path)).data.response;
    console.log(cities);
    dispatch(saveCities(cities))
  }
}


// Action creator
export const saveCities = (cities) => {
  return {
    type: types.loadCities,
    payload: cities
  }
}

// ------------------- Obtener cities por id ------------------- 
// Middleware
export const startSaveMyCities= (id) =>{
  return async (dispatch) =>{
    const mycities = (await axios.get(`${URL_API}/api/cities?userId=${id}`)).data.response;
    console.log(mycities);
    dispatch(saveMyCities(mycities))
  }
}

// Action creator
export const saveMyCities = (mycities) => {
  return {
    type: types.loadMyCities,
    payload: mycities
  }
}

// ------------------- Eliminar ------------------- 
// Middleware

export const startDeleteMyCity = (id) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = (await axios.delete(`${URL_API}/api/cities/${id}`))
        console.log(response);
        dispatch(deleteMycity(id))
        
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }
}

// Action creator
export const deleteMycity = (id) => ({
  type: types.deleteCity,
  payload: id
})



// ------------------- Actualizar ------------------- 
// Middleware
export const startUpdateCity = (id, dataNewCity) => {

  return async (dispatch) => {
    const response = await axios({
      method: "put",
      url: `${URL_API}/api/cities/${id}`,
      data: dataNewCity,
    })


    console.log(response);
    dispatch(updateCity(id, dataNewCity))
  }    
}


// Action creator
export const updateCity = (id, dataNewCity) => ({
  type: types.updateCity,
  payload: {id, dataNewCity}
})

