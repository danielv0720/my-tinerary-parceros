import axios from "axios";
import Swal from "sweetalert2";
import { URL_API } from "../../api/url";
import { types } from "../types/types"




// ------------------- Obtener itineraries por id ------------------- 
// Middleware
export const startSaveMyItineraries= (id) =>{
  return async (dispatch) =>{
    const myitineraries = (await axios.get(`${URL_API}/api/itineraries?userId=${id}`)).data.response;
    console.log(id);
    console.log(myitineraries);
    dispatch(saveMyItineraries(myitineraries))
  }
}

// Action creator
export const saveMyItineraries = (myitineraries) => {
  return {
    type: types.loadMyItineraries,
    payload: myitineraries
  }
}

// ------------------- Eliminar ------------------- 
// Middleware

export const startDeleteMyItinerary = (id) => {
  console.log(id);
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
        const response = (await axios.delete(`${URL_API}/api/itineraries/${id}`, {headers: { token: localStorage.getItem("token") }}))
        console.log(response);
        dispatch(deleteMyItinerary(id))
        
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
export const deleteMyItinerary = (id) => ({
  type: types.deleteItineraries,
  payload: id
})



// ------------------- Actualizar ------------------- 
// Middleware
export const startUpdateItinerary = (id, dataNewItinerary) => {

  return async (dispatch) => {
    const response = await axios({
      method: "put",
      url: `${URL_API}/api/itineraries/${id}`,
      data: dataNewItinerary,
      headers: { token: localStorage.getItem("token") },
    })


    console.log(response);
    dispatch(updateItinerary(id, dataNewItinerary))
  }    
}


// Action creator
export const updateItinerary = (id, dataNewItinerary) => ({
  type: types.updateItineraries,
  payload: {id, dataNewItinerary}
})
