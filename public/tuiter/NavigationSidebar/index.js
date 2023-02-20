const NavigationSidebar = () => {
  return `
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <a class="list-group-item list-group-item-action"><i class='fas fa-home'></i> <span
                            class="d-none d-xl-inline-block">Home</span></a>
                    <a class="list-group-item list-group-item-action active"><i class='fas fa-hashtag'></i> <span
                            class="d-none d-xl-inline-block">Explore</span></a>
                    <a class="list-group-item list-group-item-action"><i class='fas fa-bell'></i> <span
                            class="d-none d-xl-inline-block">Notifications</span></a>
                    <a class="list-group-item list-group-item-action"><i class='fas fa-envelope'></i> <span
                            class="d-none d-xl-inline-block">Messages</span></a>
                    <a class="list-group-item list-group-item-action"><i class='fas fa-bookmark'></i> <span
                            class="d-none d-xl-inline-block">Bookmarks</span></a>
                    <a class="list-group-item list-group-item-action"><i class='fas fa-list-ul'></i> <span
                            class="d-none d-xl-inline-block">Lists</span></a>
                    <a class="list-group-item list-group-item-action"><i class='fas fa-user'></i> <span
                            class="d-none d-xl-inline-block">Profile</span></a>
                    <a class="list-group-item list-group-item-action"><i class='fas fa-ellipsis-h'></i> <span
                            class="d-none d-xl-inline-block">More</span></a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `;
};
export default NavigationSidebar;
