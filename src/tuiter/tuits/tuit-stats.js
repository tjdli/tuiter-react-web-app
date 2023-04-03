import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const toggleTuitLike = (tuit) => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
        liked: !tuit.liked,
      })
    );
  };
  const toggleTuitDislike = (tuit) => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
        disliked: !tuit.disliked,
      })
    );
  };
  return (
    <div className="row">
      <span className="col-3">
        <i className="bi bi-chat"></i> {tuit.replies}
      </span>
      <span className="col-3">
        <i className="bi bi-repeat"></i> {tuit.retuits}
      </span>
      <span className="col-3">
        <span onClick={() => toggleTuitLike(tuit)}>
          {tuit.liked ? (
            <i className="bi bi-heart-fill text-danger"></i>
          ) : (
            <i className="bi bi-heart"></i>
          )}
        </span>{" "}
        {tuit.likes}
      </span>
      <span className="col-2">
        <span onClick={() => toggleTuitDislike(tuit)}>
          {tuit.liked ? (
            <i className="bi bi-hand-thumbs-down-fill text-danger"></i>
          ) : (
            <i className="bi bi-hand-thumbs-down-fill"></i>
          )}
        </span>{" "}
        {tuit.likes}
      </span>
      <span className="col-1">
        <i className="bi bi-share"></i> {tuit.replies}
      </span>
    </div>
  );
};
export default TuitStats;
