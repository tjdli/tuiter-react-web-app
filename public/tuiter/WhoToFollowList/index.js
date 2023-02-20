import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
    <li class="list-group-item list-group-item-action"><b>Who to follow</b></li>
    ${who.map((item) => {
        return WhoToFollowListItem(item);
    }).join("")}
    </ul>
    `
)
}

export default WhoToFollowList;