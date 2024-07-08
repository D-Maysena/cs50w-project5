import "../../assets/home/vendor/fullcalendar/core/main.css";
import "../../assets/home/vendor/fullcalendar/daygrid/main.css";
import "../../assets/home/vendor/fullcalendar/timegrid/main.css";
import "../../assets/home/vendor/fullcalendar/list/main.css";

import { Footer, Loading, Navbar, Sidebar } from "../components";

export const Calendar = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="header-for-bg">
        <div className="background-header position-relative">
          <img
            src="./images/home/page-img/profile-bg6.jpg"
            className="img-fluid w-100"
            alt="header-bg"
          />
          <div className="title-on-header">
            <div className="data-block">
              <h2>Calendario de Eventos</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="content-page" className="content-page">
        <div className="container">
          <div className="row row-eq-height">
            <div className="col-md-12 col-lg-12"></div>
            <div className="col-md-8 col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between flex-wrap">
                  <div className="header-title">
                    <h4 className="card-title">Eventos</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div id="calendar1" className="calendar-s"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
