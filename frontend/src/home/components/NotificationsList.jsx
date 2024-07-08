import { Link } from "react-router-dom";
import { NotificationItem } from "./NotificationItem";

export const NotificationsList = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <Link
          to="#"
          className="search-toggle   dropdown-toggle"
          id="notification-drop"
          data-bs-toggle="dropdown"
        >
          <i className="ri-notification-4-line"></i>
        </Link>
        <div
          className="sub-drop dropdown-menu dropdown-menu-end"
          aria-labelledby="notification-drop"
        >
          <div className="card shadow-none m-0">
            <div className="card-header d-flex justify-content-between bg-primary">
              <div className="header-title bg-primary">
                <h5 className="mb-0 text-white">Notificaciones</h5>
              </div>
              <small className="badge bg-light text-dark">4</small>
            </div>
            <div className="card-body p-0">
              
                <NotificationItem />


            </div>
          </div>
        </div>
      </li>
    </>
  );
};
