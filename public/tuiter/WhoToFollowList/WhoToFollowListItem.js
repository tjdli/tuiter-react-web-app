const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-2 text-center ps-0 pe-0 d-flex justify-content-center">
                                <img class="img-fluid rounded-circle" src="${who.avatarIcon}" alt="java">
                            </div>
                            <div class="col-7 d-block text-left align-items-center">
                                <b>${who.userName} <i class='fas fa-check-circle'></i></b>
                                <p>@${who.handle}</p>
                            </div>
                            <div class="col-3 d-flex justify-content-center mt-3 mb-3">
                                <button type="button" class="btn btn-primary rounded-pill">Follow</button>
                            </div>
                        </div>
                    </li>
    `
    );
}

export default WhoToFollowListItem;