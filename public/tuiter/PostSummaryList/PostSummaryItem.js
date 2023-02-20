const PostSummaryItem = (post) => {
  return `
    <div class="card-body border border-light p-3 pe-4" style="background-color: #222">
                    <div class="row">
                        <div class="col-10">
                            <p class="m-0 text-secondary">${post.topic}</p>
                            <p class="m-0"><b>${post.userName}</b> <i class='fas fa-check-circle'></i> <span
                                    class="text-secondary">- ${post.time}</span></p>
                            <p class="m-0 font-weight-bold"><b>${post.title}</b></p>
                            ${post.tweets !== undefined ? `<p class="m-0 text-secondary">${post.tweets}</p>` : `</>`}
                        </div>
                        <div class="col-2 d-flex align-items-center ps-0 pe-0">
                            <img class="img-fluid rounded" src="${post.image}" />
                        </div>
                    </div>
                </div>`;
};

export default PostSummaryItem;
