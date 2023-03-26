import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div>
      <div className="list-group">
        <Link className="list-group-item">
          <i className="bi bi-twitter"></i>
        </Link>
        <Link
          className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
          to="/tuiter"
        >
          <i className="bi bi-house-fill"></i> Home
        </Link>
        <Link
          className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
          to="/tuiter/explore/"
        >
          <i className="bi bi-hash"></i> Explore
        </Link>
        <Link
          className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
        >
          <i className="bi bi-bell-fill"></i> Notifications
        </Link>
        <Link
          className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
        >
          <i className="bi bi-envelope-fill"></i> Messages
        </Link>
        <Link
          className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
        >
          <i className="bi bi-bookmark-fill"></i> Bookmarks
        </Link>
        <Link
          className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        >
          <i className="bi bi-list-ul"></i> Lists
        </Link>
        <Link
          className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        >
          <i className="bi bi-person-fill"></i> Profile
        </Link>
        <Link
          className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        >
          <i className="bi bi-three-dots"></i> More
        </Link>
      </div>
      <div className="d-grid mt-2">
        <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
          Tweet
        </a>
      </div>
    </div>
  );
};
export default NavigationSidebar;
