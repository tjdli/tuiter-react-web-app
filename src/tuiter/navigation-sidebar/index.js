import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div>
      <div className="list-group">
        <a className="list-group-item">
          <i class="bi bi-twitter"></i>
        </a>
        <a
          className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
        >
          <i class="bi bi-house-fill"></i> Home
        </a>
        <a
          className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
        >
          <i class="bi bi-hash"></i> Explore
        </a>
        <a
          className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
        >
          <i class="bi bi-bell-fill"></i> Notifications
        </a>
        <a
          className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
        >
          <i class="bi bi-envelope-fill"></i> Messages
        </a>
        <a
          className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
        >
          <i class="bi bi-bookmark-fill"></i> Bookmarks
        </a>
        <a
          className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        >
          <i class="bi bi-list-ul"></i> Lists
        </a>
        <a
          className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        >
          <i class="bi bi-person-fill"></i> Profile
        </a>
        <a
          className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        >
          <i class="bi bi-three-dots"></i> More
        </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
          Tweet
        </a>
      </div>
    </div>
  );
};
export default NavigationSidebar;
