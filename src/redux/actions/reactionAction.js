import axios from "axios";
import { URL_API } from "../../api/url";
import { loadReactions, updateReaction, deleteReactions, loadMyReactions } from "../reducers/reactionReducer";

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

