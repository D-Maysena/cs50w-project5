import { Link, NavLink, useNavigate } from "react-router-dom";
import { fetchLogout } from "../../auth/helpers/fetch";
import { toast } from "react-toastify";
import { NotificationsList } from "./NotificationsList";
import { FriendRequestList } from "./FriendRequestList";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetchLogout();
    toast.warn("¡Has cerrado sesión!");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="iq-navbar-logo d-flex justify-content-between">
              <Link to="/home">
               
                <span>Amifur</span>
              </Link>
              <div className="iq-menu-bt align-self-center">
                <div className="wrapper-menu">
                  <div className="main-circle">
                    <i className="ri-menu-line"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-3-line"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ms-auto navbar-list">
                <li>
                  <Link
                    to="/home"
                    className="  d-flex align-items-center"
                  >
                    <i className="ri-home-line"></i>
                  </Link>
                </li>
                
                <li className="nav-item dropdown">
                  <Link
                    to="#"
                    className="   d-flex align-items-center dropdown-toggle"
                    id="drop-down-arrow"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="../images/home/user/yo.jpg"
                      className="img-fluid rounded-circle me-3"
                      alt="user"
                    />
                    <div className="caption">
                      <h6 className="mb-0 line-height">Yasser Darce</h6>
                    </div>
                  </Link>
                  <div
                    className="sub-drop dropdown-menu dropdown-menu-end caption-menu"
                    aria-labelledby="drop-down-arrow"
                  >
                    <div className="card shadow-none m-0">
                      <div className="card-header  bg-primary">
                        <div className="header-title">
                          <h5 className="mb-0 text-white">Hello Yasser Darce</h5>
                          <span className="text-white font-size-12">
                            Available
                          </span>
                        </div>
                      </div>
                      <div className="card-body p-0 ">
                        {/* <Link
                          to="../app/profile.html"
                          className="iq-sub-card iq-bg-primary-hover"
                        >
                          <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-primary">
                              <i className="ri-file-user-line"></i>
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 ">My Profile</h6>
                              <p className="mb-0 font-size-12">
                                View personal profile details.
                              </p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="../app/profile-edit.html"
                          className="iq-sub-card iq-bg-warning-hover"
                        >
                          <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-warning">
                              <i className="ri-profile-line"></i>
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 ">Edit Profile</h6>
                              <p className="mb-0 font-size-12">
                                Modify your personal details.
                              </p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/home"
                          className="iq-sub-card iq-bg-info-hover"
                        >
                          <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-info">
                              <i className="ri-account-box-line"></i>
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 ">Account settings</h6>
                              <p className="mb-0 font-size-12">
                                Manage your account parameters.
                              </p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/home"
                          className="iq-sub-card iq-bg-danger-hover"
                        >
                          <div className="d-flex align-items-center">
                            <div className="rounded card-icon bg-soft-danger">
                              <i className="ri-lock-line"></i>
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0 ">Privacy Settings</h6>
                              <p className="mb-0 font-size-12">
                                Control your privacy parameters.
                              </p>
                            </div>
                          </div>
                        </Link> */}
                        <div className="d-inline-block w-100 text-center p-3">
                          <button
                            className="btn btn-primary iq-sign-btn"
                            onClick={handleLogout}
                          >
                            Cerrar sesión<i className="ri-login-box-line ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
