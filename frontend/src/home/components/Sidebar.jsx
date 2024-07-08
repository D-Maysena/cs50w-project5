import { Link, NavLink } from "react-router-dom";

export const  Sidebar = () => {
  return (
    <>
      <div className="iq-sidebar  sidebar-default ">
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
              <li className={window.location.href.slice(21) === "/home" ? 'active' : '' } >
                <Link to="/home" className=" ">
                  <i className="las la-newspaper"></i>
                  <span>Feed</span>
                </Link>
              </li>
              <li className={window.location.href.slice(21) === "/communities" ? 'active' : ''} >
                <Link to="/communities" className=" ">
                  <i className="las la-users"></i>
                  <span>Comunidades</span>
                </Link>
              </li>
              <li className="" >
                <Link to="/events" className=" ">
                  <i className="las la-calendar"></i>
                  <span>Eventos</span>
                </Link>
              </li>
              <li className=" ">
                <Link
                  to="#mailbox"
                  data-bs-toggle="collapse"
                  className="  collapsed"
                  aria-expanded="false"
                >
                  <i className="ri-mail-line"></i>
                  <span>Email</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </Link>
                <ul
                  id="mailbox"
                  className="iq-submenu collapse"
                  data-bs-parent="#iq-sidebar-toggle"
                >
                  <li className="">
                    <Link to="/inbox">
                      <i className="  ri-inbox-line"></i>Inbox
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/compose">
                      <i className="ri-edit-line"></i>Email Compose
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="p-5"></div>
        </div>
      </div>
    </>
  );
};
