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
        
        <div className="card-citie-hotel shadow1 cardmy">
          <h4>{r.itinerary[0].name }</h4>

          <img className="img-card" src={r.itinerary[0].photo[0]} />

          {r.reaction.name === "like" && (
            <div style={{ color: "blue" }}>
              <img className="log_reaction" src={r.reaction.icon } alt="" />
              <button className="btn-mycities-delet"
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
                Eliminar 
              </button>
            </div>
          )}


          {r.reaction.name === "love" && (
            <div style={{ color: "red" }}>
              <div>
              <img className="log_reaction" src={r.reaction.icon } alt="" />
              <button className="btn-mycities-delet"
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
                Eliminar 
              </button>
              </div>
            </div>
          )}
          
          {r.reaction.name === "dislike" && (
            <div style={{ color: "gray" }}>
             <img className="log_reaction" src={r.reaction.icon } alt="" />
              <button className="btn-mycities-delet"
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
                Eliminar 
              </button>
            </div>
          )}
          {r.reaction.name === "surprise" && (
            <div style={{ color: "green" }}>
              <img className="log_reaction" src={r.reaction.icon } alt="" />
              <button className="btn-mycities-delet"
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
                Eliminar 
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Myreactions;
