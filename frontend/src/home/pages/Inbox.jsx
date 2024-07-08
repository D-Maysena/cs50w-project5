import { Footer, Loading, Navbar, Sidebar } from "../components";

export const Inbox = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      
      <div id="content-page" className="content-page h-100">
        <div className="container relative">
          <div className="row">
            <div className="col-lg-3">
              <div className="card h-100">
                <div className="card-body">
                  <div className="">
                    <div className="iq-email-list">
                      <button
                        className="btn btn-primary btn-lg btn-block mb-3 p-2 w-100"
                        data-target="#compose-email-popup"
                        data-toggle="modal"
                      >
                        <i className="ri-send-plane-line me-2"></i>New Message
                      </button>
                      <div className="iq-email-ui nav flex-column nav-pills">
                        <a
                          className="nav-link active"
                          role="button"
                          data-bs-toggle="pill"
                          href="#mail-inbox"
                        >
                          <div className="d-flex align-items-center justify-content-between">
                            <span>
                              <i className="ri-mail-line"></i>Inbox
                            </span>
                            <span className="badge bg-primary ms-2">4</span>
                          </div>
                        </a>
                        <a
                          className="nav-link"
                          role="button"
                          data-bs-toggle="pill"
                          href="#mail-sent"
                        >
                          <i className="ri-mail-send-line"></i>Sent Mail
                        </a>
                        <a
                          className="nav-link"
                          role="button"
                          data-bs-toggle="pill"
                          href="#mail-important"
                        >
                          <i className="ri-bookmark-line"></i>Important
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-9 mail-box-detail">
              <div className="card">
                <div className="card-body p-0">
                  <div className="">
                    <div className="iq-email-to-list p-3">
                      <div className="iq-email-to-list-detail d-flex justify-content-between">
                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                          <li className="me-1">
                            <div id="navbarDropdown" data-bs-toggle="dropdown">
                              <div className="d-flex align-items-center form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheck1"
                                >
                                  <i className="ri-arrow-down-s-line"></i>
                                </label>
                              </div>
                            </div>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </li>
                          <li
                            className="me-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Reload"
                          >
                            <a href="#">
                              <i className="ri-restart-line"></i>
                            </a>
                          </li>
                          <li
                            className="me-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Archive"
                          >
                            <a href="#">
                              <i className="ri-mail-open-line"></i>
                            </a>
                          </li>
                          <li
                            className="me-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Delete"
                          >
                            <a href="#">
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                          <li
                            className="me-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Inbox"
                          >
                            <a href="#">
                              <i className="ri-mail-unread-line"></i>
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Zoom"
                          >
                            <a href="#">
                              <i className="ri-drag-move-2-line"></i>
                            </a>
                          </li>
                        </ul>
                        <div className="iq-email-search d-flex">
                          <form className="me-2 position-relative searchbox">
                            <div className="form-group mb-0">
                              <input
                                type="email"
                                className="form-control search-input"
                                id="exampleInputEmail1"
                                placeholder="Search"
                              />
                              <a className="search-link" href="#">
                                <i className="ri-search-line"></i>
                              </a>
                            </div>
                          </form>
                          <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                            <li className="me-2">
                              <a
                                className="font-size-14"
                                href="#"
                                id="navbarDropdown1"
                                data-bs-toggle="dropdown"
                              >
                                1 - 50 of 505
                              </a>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown1"
                              >
                                <a className="dropdown-item" href="#">
                                  20 per page
                                </a>
                                <a className="dropdown-item" href="#">
                                  50 per page
                                </a>
                                <a className="dropdown-item" href="#">
                                  100 per page
                                </a>
                              </div>
                            </li>
                            <li
                              className="me-1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Previous"
                            >
                              <a href="#">
                                <i className="ri-arrow-left-s-line"></i>
                              </a>
                            </li>
                            <li
                              className="me-1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Next"
                            >
                              <a href="#">
                                <i className="ri-arrow-right-s-line"></i>
                              </a>
                            </li>
                            <li
                              className="me-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Setting"
                            >
                              <a href="#">
                                <i className="ri-list-settings-line"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="iq-email-listbox">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="mail-inbox"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li className="iq-unread">
                              <div className="d-flex align-self-center iq-unread-inner">
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="mailk"
                                      ></label>
                                    </div>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle text-warning"></span>
                                  <a href="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </a>
                                </div>
                                <div className="iq-email-content">
                                  <a href="#" className="iq-email-subject">
                                    Mackenzie Bnio (@MackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @MackenzieBnio - Very cool Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </a>
                                  <div className="iq-email-date">08:00 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <a href="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ri-mail-line"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ri-time-line"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="email-app-details">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="">
                                      <div className="iq-email-to-list p-3">
                                        <div className="d-flex justify-content-between">
                                          <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                            <li className="me-3">
                                              <a
                                                href=""
                                                className="email-remove"
                                              >
                                                <i className="ri-arrow-left-line m-0 h4"></i>
                                              </a>
                                            </li>
                                            <li
                                              className="me-2"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              title="Mail"
                                            >
                                              <a href="#">
                                                <i className="ri-mail-open-line"></i>
                                              </a>
                                            </li>
                                            <li
                                              className="me-2"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              title="Info"
                                            >
                                              <a href="#">
                                                <i className="ri-information-line"></i>
                                              </a>
                                            </li>
                                            <li
                                              className="me-2"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              title="Delete"
                                            >
                                              <a href="#">
                                                <i className="ri-delete-bin-line"></i>
                                              </a>
                                            </li>
                                            <li
                                              className="me-2"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              title="Unread"
                                            >
                                              <a href="#">
                                                <i className="ri-mail-unread-line"></i>
                                              </a>
                                            </li>
                                            <li
                                              className="me-2"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              title="Transfer"
                                            >
                                              <a href="#">
                                                <i className="ri-folder-transfer-line"></i>
                                              </a>
                                            </li>
                                            <li
                                              className="me-2"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              title="Bookmark"
                                            >
                                              <a href="#">
                                                <i className="ri-bookmark-line"></i>
                                              </a>
                                            </li>
                                          </ul>
                                          <div className="iq-email-search d-flex">
                                            <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                              <li className="me-3">
                                                <a
                                                  className="font-size-14"
                                                  href="#"
                                                >
                                                  1 of 505
                                                </a>
                                              </li>
                                              <li
                                                className="me-2"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Previous"
                                              >
                                                <a href="#">
                                                  <i className="ri-arrow-left-s-line"></i>
                                                </a>
                                              </li>
                                              <li
                                                className="me-2"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Next"
                                              >
                                                <a href="#">
                                                  <i className="ri-arrow-right-s-line"></i>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <hr className="mt-0" />
                                      <div className="iq-inbox-subject p-3">
                                        <h5 className="mb-2">
                                          Your elite author Graphic Optimization
                                          reward is ready!
                                        </h5>
                                        <div className="iq-inbox-subject-info">
                                          <div className="iq-subject-info">
                                            <img
                                              src="../assets/images/user/user-1.jpg"
                                              className="img-fluid rounded-circle avatar-80"
                                              alt="#"
                                            />
                                            <div className="iq-subject-status align-self-center">
                                              <h6 className="mb-0">
                                                SocialV team{" "}
                                                <a href="dummy@SocialV.com">
                                                  dummy@SocialV.com
                                                </a>
                                              </h6>
                                              <div className="dropdown">
                                                <a
                                                  className="dropdown-toggle"
                                                  href="#"
                                                  id="dropdownMenuButton"
                                                  data-bs-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  to Me
                                                </a>
                                                <div
                                                  className="dropdown-menu font-size-12"
                                                  aria-labelledby="dropdownMenuButton"
                                                >
                                                  <table className="iq-inbox-details">
                                                    <tbody>
                                                      <tr>
                                                        <td>from:</td>
                                                        <td>
                                                          Medium Daily Digest
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>reply-to:</td>
                                                        <td>
                                                          noreply@gmail.com
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>to:</td>
                                                        <td>
                                                          iqonicdesigns@gmail.com
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>date:</td>
                                                        <td>
                                                          13 Dec 2019, 08:30
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>subject:</td>
                                                        <td>The Golden Rule</td>
                                                      </tr>
                                                      <tr>
                                                        <td>security:</td>
                                                        <td>
                                                          Standard encryption
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                            <span className="align-self-center">
                                              Jan 15, 2029, 10:20AM
                                            </span>
                                          </div>
                                          <div className="iq-inbox-body ">
                                            <p>Hi Jopour Xiong,</p>
                                            <p>
                                              It is a long established fact that
                                              a reader will be distracted by the
                                              readable content of a page when
                                              looking at its layout. The point
                                              of using Lorem Ipsum is that it
                                              has a more-or-less normal
                                              distribution of letters, as
                                              opposed to using 'Content here,
                                              content here', making it look like
                                              readable English. Many desktop
                                              publishing packages and web page
                                              editors now use Lorem Ipsum as
                                              their default model text, and a
                                              search for 'lorem ipsum' will
                                              uncover many web sites still in
                                              their infancy.{" "}
                                            </p>
                                            <p>
                                              Various versions have evolved over
                                              the years, sometimes by accident,
                                              sometimes on purpose (injected
                                              humour and the like).
                                            </p>
                                            <p className="mt-5 mb-0">
                                              Regards,
                                              <span className="d-inline-block w-100">
                                                John Deo
                                              </span>
                                            </p>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                            </li>
                          </ul>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="mail-sent"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li>
                              <div className="d-flex align-self-center iq-unread-inner">
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk015"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="mailk015"
                                      ></label>
                                    </div>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <a href="#" className="iq-email-title">
                                    Megan Allen (Me)
                                  </a>
                                </div>
                                <div className="iq-email-content">
                                  <a href="#" className="iq-email-subject">
                                    Jecno Mac (@jecnomac) has sent you a direct
                                    message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </a>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <a href="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ri-mail-line"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ri-time-line"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="mail-important"
                          role="tabpanel"
                        >
                          <ul className="iq-email-sender-list">
                            <li>
                              <div className="d-flex align-self-center iq-unread-inner">
                                <div className="iq-email-sender-info">
                                  <div className="iq-checkbox-mail">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="mailk029"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="mailk029"
                                      ></label>
                                    </div>
                                  </div>
                                  <span className="ri-star-line iq-star-toggle"></span>
                                  <a href="#" className="iq-email-title">
                                    Jopour Xiong (Me)
                                  </a>
                                </div>
                                <div className="iq-email-content">
                                  <a href="#" className="iq-email-subject">
                                    Mackenzie Bnio (@mackenzieBnio) has sent you
                                    a direct message on Twitter! &nbsp;–&nbsp;
                                    <span>
                                      @LucasKriebel - Very cool Nicklas, You
                                      have a new direct message.
                                    </span>
                                  </a>
                                  <div className="iq-email-date">11:49 am</div>
                                </div>
                                <ul className="iq-social-media list-inline">
                                  <li>
                                    <a href="#">
                                      <i className="ri-delete-bin-2-line"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ri-mail-line"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ri-file-list-2-line"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="ri-time-line"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
