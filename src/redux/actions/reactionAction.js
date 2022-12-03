import axios from "axios";
import Swal from "sweetalert2";
import { URL_API } from "../../api/url";
import { loadReactions, updateReaction, deleteReactions, loadMyReactions, deleteMyReactions } from "../reducers/reactionReducer";

export const startSaveReactions= (id) =>{
  return async (dispatch) =>{
    const itineraryReaction = (await axios.get(`${URL_API}/api/reactionsByItinerary?itineraryId=${id}`)).data.response;
    console.log("itineraryReaction get", itineraryReaction);
    dispatch(loadReactions({itineraryReaction, id}))
  }
}


export const startSaveMyReactions= (id) =>{
  return async (dispatch) =>{
    let headers = { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}` } } 
    const myReactions = (await axios.get(`${URL_API}/api/reactions?userId=${id}`, headers)).data.response;
    console.log("myReactions get", myReactions)
    dispatch(loadMyReactions(myReactions))
  }
}

//actualizar
export const startUpdateReactions = (iteneraryId, reactionName, action, userId) => {
  console.log(iteneraryId, reactionName, action, userId);
  return async (dispatch) => {
 
    let headers = { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}` } } 

    const res = (await axios.put(`${URL_API}/api/reactions?name=${reactionName}&itineraryId=${iteneraryId}&action=${action}`, null, headers)).data.response;
    console.log(res);

    if (action === 'add') {
      dispatch(updateReaction({userId, iteneraryId, reactionName}))
    } else if (action === 'remove') {
      dispatch(deleteReactions({userId, iteneraryId, reactionName}))
    }
  }
}

export const startUpdateMyReactions = (iteneraryId, reactionName, action, userId) => {
  console.log(iteneraryId, reactionName, action, userId);
  return async (dispatch) => {
    dispatch(startSaveReactions(iteneraryId))
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
        let headers = { headers : { 'Authorization' : `Bearer ${localStorage.getItem('token')}` } } 
    
        const res = (await axios.put(`${URL_API}/api/reactions?name=${reactionName}&itineraryId=${iteneraryId}&action=${action}`, null, headers)).data.response;
        console.log(res);
    
        if (action === 'add') {
          dispatch(updateReaction({userId, iteneraryId, reactionName}))
        } else if (action === 'remove') {
          dispatch(deleteMyReactions({userId, iteneraryId, reactionName}))
        }

        Swal.fire(
          'Deleted!',
          'Your reaction has been deleted.',
          'success'
        )
      }
    })
  }
}

