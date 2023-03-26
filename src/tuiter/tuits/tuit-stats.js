import React from "react";
import { useDispatch } from "react-redux";
import {toggleTuitLike} from "./tuits-reducer";

const TuitStats = ({ tuit }) => {
const dispatch = useDispatch();
  return (
    <div className="row">
      <span className="col-3">
        <i className="bi bi-chat"></i> {tuit.replies}
      </span>
      <span className="col-3">
        <i className="bi bi-repeat"></i> {tuit.retuits}
      </span>
      <span className="col-3">
        <span onClick={() => dispatch(toggleTuitLike(tuit))}>
        {tuit.liked ? (
          <i className="bi bi-heart-fill text-danger"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}</span>{" "}
        {tuit.likes}
      </span>
      <span className="col-3">
        <i className="bi bi-share"></i> {tuit.replies}
      </span>
    </div>
  );
};
export default TuitStats;
