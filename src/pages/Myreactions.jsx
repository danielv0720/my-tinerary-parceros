import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUpdateMyReactions } from "../redux/actions/reactionAction";

const Myreactions = () => {
  const reactions = useSelector((state) => state.reactions.myReactions);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.users.id);
  console.log(reactions);
  return (
    <>
      {reactions.map((r) => (
        <div>
          <h4>{r.itinerary[0].name}</h4>

          <img className="image" src={r.itinerary[0].photo[0]} />

          {r.reaction.name === "like" && (
            <div style={{ color: "blue" }}>
              {r.reaction.name}
              <button
                onClick={() => {
                  dispatch(
                    startUpdateMyReactions(
                      r.itinerary[0]._id,
                      r.reaction.name,
                      'remove',
                      userId,
                    )
                  );
                }}
              >
                Eliminar reaccion
              </button>
            </div>
          )}
          {r.reaction.name === "love" && (
            <div style={{ color: "red" }}>
              {r.reaction.name}
              <button
                onClick={() => {
                  dispatch(
                    startUpdateMyReactions(
                      r.itinerary[0]._id,
                      r.reaction.name,
                      'remove',
                      userId,
                    )
                  );
                }}
              >
                Eliminar reaccion
              </button>
            </div>
          )}
          {r.reaction.name === "dislike" && (
            <div style={{ color: "gray" }}>
              {r.reaction.name}
              <button
                onClick={() => {
                  dispatch(
                    startUpdateMyReactions(
                      r.itinerary[0]._id,
                      r.reaction.name,
                      'remove',
                      userId,
                    )
                  );
                }}
              >
                Eliminar reaccion
              </button>
            </div>
          )}
          {r.reaction.name === "surprise" && (
            <div style={{ color: "green" }}>
              {r.reaction.name}
              <button
                onClick={() => {
                  dispatch(
                    startUpdateMyReactions(
                      r.itinerary[0]._id,
                      r.reaction.name,
                      'remove',
                      userId,
                    )
                  );
                }}
              >
                Eliminar reaccion
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Myreactions;
