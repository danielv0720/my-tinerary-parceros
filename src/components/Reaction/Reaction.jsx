import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startUpdateReactions } from '../../redux/actions/reactionAction';

export default function Reaction(props) {
  let {nombre, total, iteneraryId} = props;
  const dispatch = useDispatch();
  const userId = useSelector(state=> state.users.id)
  const a = useSelector(state=> state.reactions.itineraryReaction)
  const addReaction = () => {
    const e = a.find(r => r.id === iteneraryId)
    const r = e.reactions.find(f => f.name === nombre)
    const y = r.userId.includes(userId);
    console.log(y);
    const action = y ? 'remove' : 'add';

    console.log(action);
    dispatch(startUpdateReactions(iteneraryId, nombre, action, userId))
  }
  return (
    <>
     <button onClick={addReaction}>{nombre} {total}</button>
    </>
  )
}
