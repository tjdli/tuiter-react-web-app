import React from "react";
const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla.png",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div>{post.topic}</div>
          <div>
            {post.userName !== "" && post.userName !== null ? (
              <span>
                <span className="fw-bolder">
                  {post.userName} <i class="bi bi-check-circle-fill"></i>
                </span>{" "}
                -
              </span>
            ) : (
              <></>
            )}{" "}
            {post.time}
          </div>
          <div className="fw-bolder">{post.title}</div>
          <div>{post.tweets}</div>
        </div>
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={`/images/${post.image}`}
          />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
