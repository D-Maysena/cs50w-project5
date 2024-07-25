import { CommunitiesList, Footer, Loading, Navbar, Sidebar } from "../components";

export const Communities = () => {

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="header-for-bg">
        <div className="background-header position-relative">
          <img
            src="./images/home/page-img/profile-bg7.jpg"
            className="img-fluid w-100"
            alt="header-bg"
          />
          <div className="title-on-header">
            <div className="data-block">
              <h2>Comunidades</h2>
            </div>
          </div>
        </div>
      </div>
      <CommunitiesList />

      <Footer />
    </>
  );
};
