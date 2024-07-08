import { Link } from "react-router-dom";
import { FriendRequestItem } from "./FriendRequestItem";

export const FriendRequestList = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <Link
          to="#"
          className="dropdown-toggle"
          id="group-drop"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="ri-group-line"></i>
        </Link>
        <div
          className="sub-drop sub-drop-large dropdown-menu dropdown-menu-end"
          aria-labelledby="group-drop"
        >
          <div className="card shadow-none m-0">
            <div className="card-header d-flex justify-content-between bg-primary">
              <div className="header-title">
                <h5 className="mb-0 text-white">Solicitudes de amistad</h5>
              </div>
              <small className="badge  bg-light text-dark ">4</small>
            </div>
            <div className="card-body p-0">
              <FriendRequestItem />
              
              <div className="text-center">
                <Link to="#" className=" btn text-primary">
                  View More Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
