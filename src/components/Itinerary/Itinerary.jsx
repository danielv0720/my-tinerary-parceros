import React, { useEffect,  } from 'react'
import Reaction from '../Reaction/Reaction'

import {startSaveReactions} from '../../redux/actions/reactionAction'
import { useDispatch, useSelector } from 'react-redux';


export const Itinerary = ({item}) => {
const id = item._id
const dispatch = useDispatch()

const reactionState = useSelector(state =>state.reactions.itineraryReaction)
const reactionsFilter = reactionState.find(e => e.id === id)?.reactions

  useEffect(() => {
    dispatch(startSaveReactions(id))
  }, [dispatch, id])


  return (
    <>
    <div className='log_container'>
      <li key={item._id}>{item.name}</li>
      <div className='log_itenerary'>
      <img src={item.photo[0]} alt="imagen" />

      </div>
      <div className='bt-reaction'>
      {reactionsFilter && 
        reactionsFilter.map(r => (
          <Reaction  key={r._id} iteneraryId={id} nombre={r.name} total={r.userId.length}></Reaction>
          
        ))
      }

      </div>
      </div>

    </>
)
}
