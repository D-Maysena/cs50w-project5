

import { CreatePostForm, Navbar, Sidebar, PostItem, EventsList, CommunitiesSuggestedList, Footer, Loading } from "../components";

export const Home = () => {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div id="content-page" className="content-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 row m-0 p-0">
              
              <PostItem />
              

            </div>
            <div className="col-lg-4">
              <EventsList />

              <CommunitiesSuggestedList />
            </div>
            <div className="col-sm-12 text-center">
              <img
                src="./images/home/page-img/page-load-loader.gif"
                alt="loader"
                style={{ height: "100px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
