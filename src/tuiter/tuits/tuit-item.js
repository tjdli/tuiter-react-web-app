import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            className="rounded-circle"
            height={48}
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
          <span className="fw-bolder">
            {tuit.userName} <i className="bi bi-patch-check-fill icon-blue"></i>
          </span>{" "}
          <span>
            {tuit.handle} - {tuit.time}
          </span>
          <div>{tuit.tuit}</div>
          <br />
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};

export default TuitItem;
