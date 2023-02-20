import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
    <div class="mt-2">
        ${exploreItems.map((post) => {
            return PostSummaryItem(post)
        }).join("")}
    </div>
    `)
}

export default PostSummaryList;