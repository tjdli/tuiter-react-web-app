import PostSummaryList
   from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="row d-flex align-items-center ms-0">
    <div class="col-10 form-group border rounded-pill">
        <i class="fa fa-search"></i>
        <input class=" rounded-pill border-0 shadow-none h-100 pt-2 pb-2 bg-transparent" style="width: 95%; outline: none" placeholder="Search Tuiter"
            type="text" />
    </div>
    <div class="col-2 d-flex justify-content-center">
        <a><i class='fas fa-cog h-100 fs-3' style="color:rgb(12,109,253);"></i></a>
    </div>
</div>
           <ul class="nav mb-2 nav-tabs">
           <a href="for-you.html" class="nav-link active list-inline-item pt-2 ps-3 pe-3 me-0 text-decoration-none">For you</a>
           <a href="trending.html" class="nav-link list-inline-item pt-2 ps-3 pe-3 me-0 text-primary fw-bold text-decoration-none">Trending</a>
           <a href="news.html" class="nav-link list-inline-item pt-2 ps-3 pe-3 me-0 text-primary fw-bold text-decoration-none">News</a>
           <a href="sports.html" class="nav-link list-inline-item pt-2 ps-3 pe-3 me-0 text-primary fw-bold text-decoration-none">Sports</a>
           <a href="entertainment.html" class="nav-link list-inline-item pt-2 ps-3 pe-3 me-0 text-primary fw-bold d-none d-md-inline-block text-decoration-none">Entertainment</a>
           </ul>
           <div class="card">
                    <img class="card-img-top" src="../../images/spacexstarship.webp">
                    <div class="card-img-overlay d-flex flex-column justify-content-end">
                        <h4 class="card-title text-white mb-0"><b>SpaceX's Starship</b></h4>
                    </div>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent
