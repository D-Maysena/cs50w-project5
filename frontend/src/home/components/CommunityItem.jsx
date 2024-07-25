import { Link, useParams } from "react-router-dom";

export const CommunityItem = ({ item }) => {

  return (
    <>
      <div className="card mb-0">
        <div className="top-bg-image">
          <img
            src="./images/home/page-img/profile-bg1.jpg"
            className="img-fluid w-100"
            alt="group-bg"
          />
        </div>
        <div className="card-body text-center">
          <div className="group-icon">
            <img
              src="./images/home/page-img/icon1.png"
              alt="profile-img"
              className="rounded-circle img-fluid avatar-120"
            />
          </div>
          <div className="group-info pt-3 pb-3">
            <h4>
              <Link to="/community">{item.nombre}</Link>
            </h4>
            <p>{item.descripcion}</p>
          </div>
      
          <div className="group-member mb-3">
            <div className="iq-media-group">
              <Link to="#" className="iq-media">
                <img
                  className="img-fluid avatar-40 rounded-circle"
                  src="./images/home/user/05.jpg"
                  alt=""
                />
              </Link>
              <Link to="#" className="iq-media">
                <img
                  className="img-fluid avatar-40 rounded-circle"
                  src="./images/home/user/06.jpg"
                  alt=""
                />
              </Link>
              <Link to="#" className="iq-media">
                <img
                  className="img-fluid avatar-40 rounded-circle"
                  src="./images/home/user/07.jpg"
                  alt=""
                />
              </Link>
              <Link to="#" className="iq-media">
                <img
                  className="img-fluid avatar-40 rounded-circle"
                  src="./images/home/user/08.jpg"
                  alt=""
                />
              </Link>
              <Link to="#" className="iq-media">
                <img
                  className="img-fluid avatar-40 rounded-circle"
                  src="./images/home/user/09.jpg"
                  alt=""
                />
              </Link>
              <Link to="#" className="iq-media">
                <img
                  className="img-fluid avatar-40 rounded-circle"
                  src="./images/home/user/10.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <Link to={`/community/${item.id}`} className="btn btn-primary d-block w-100">
            Ver más
          </Link>
        </div>
      </div>
    </>
  );
};
