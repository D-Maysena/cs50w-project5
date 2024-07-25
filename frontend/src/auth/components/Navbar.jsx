import { Link, NavLink, useNavigate } from "react-router-dom";
import { fetchLogout } from "../../auth/helpers/fetch";
import { toast } from "react-toastify";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetchLogout();
    toast.warn("¡Has cerrado sesión!");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link className="navbar-brand ms-lg-5" to="/">
          
        <h1 className="m-0 text-uppercase text-dark"><i className="bi bi-shop fs-1 text-primary me-3"></i>Amifur</h1>
        </Link>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
              
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `nav-item nav-link  ${isActive ? "active" : ""}`
                  }
                >
                  Iniciar sesión
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `nav-item nav-link  ${isActive ? "active" : ""}`
                  }
                >
                  Registrarse
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
