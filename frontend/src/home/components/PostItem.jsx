export const PostItem = () => {
  return (
    <>
      <div className="col-sm-12">
        <div className="card card-block card-stretch card-height">
          <div className="card-body">
            <div className="user-post-data">
              <div className="d-flex justify-content-between">
                <div className="me-3">
                  <img
                    className="rounded-circle img-fluid"
                    src="./images/home/user/01.jpg"
                    alt=""
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <h5 className="mb-0 d-inline-block">Julio Fernando</h5>
                      <span className="mb-0 d-inline-block">Add New Post</span>
                      <p className="mb-0 text-primary">Just Now</p>
                    </div>
                    <div className="card-post-toolbar">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          role="button"
                        >
                          <i className="ri-more-fill"></i>
                        </span>
                        <div className="dropdown-menu m-0 p-0">
                          <a className="dropdown-item p-3" href="#">
                            <div className="d-flex align-items-top">
                              <div className="h4">
                                <i className="ri-save-line"></i>
                              </div>
                              <div className="data ms-2">
                                <h6>Save Post</h6>
                                <p className="mb-0">
                                  Add this to your saved items
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item p-3" href="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-close-circle-line h4"></i>
                              <div className="data ms-2">
                                <h6>Hide Post</h6>
                                <p className="mb-0">
                                  See fewer posts like this.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item p-3" href="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-user-unfollow-line h4"></i>
                              <div className="data ms-2">
                                <h6>Unfollow User</h6>
                                <p className="mb-0">
                                  Stop seeing posts but stay friends.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item p-3" href="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-notification-line h4"></i>
                              <div className="data ms-2">
                                <h6>Notifications</h6>
                                <p className="mb-0">
                                  Turn on notifications for this post
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p>
                Holaa, miren a mi nueva mascota
              </p>
            </div>
            <div className="user-post">
              <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                <div className="row-span-2 row-span-md-1">
                  <img
                    src="./images/home/page-img/mascota1.jpg"
                    alt="post-image"
                    className="img-fluid rounded w-100"
                  />
                </div>
              
              </div>
            </div>
            <div className="comment-area mt-3">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="like-block position-relative d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="like-data">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          role="button"
                        >
                          <img
                            src="./images/home/icon/01.png"
                            className="img-fluid"
                            alt=""
                          />
                        </span>
                        <div className="dropdown-menu py-2">
                          <a
                            className="ms-2 me-2"
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Like"
                          >
                            <img
                              src="./images/home/icon/01.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <a
                            className="me-2"
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Love"
                          >
                            <img
                              src="./images/home/icon/02.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <a
                            className="me-2"
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Happy"
                          >
                            <img
                              src="./images/home/icon/03.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <a
                            className="me-2"
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="HaHa"
                          >
                            <img
                              src="./images/home/icon/04.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <a
                            className="me-2"
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Think"
                          >
                            <img
                              src="./images/home/icon/05.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <a
                            className="me-2"
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Sade"
                          >
                            <img
                              src="./images/home/icon/06.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <a
                            className="me-2"
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Lovely"
                          >
                            <img
                              src="./images/home/icon/07.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="total-like-block ms-2 me-3">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          role="button"
                        >
                          140 Likes
                        </span>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Max Emum
                          </a>
                          <a className="dropdown-item" href="#">
                            Bill Yerds
                          </a>
                          <a className="dropdown-item" href="#">
                            Hap E. Birthday
                          </a>
                          <a className="dropdown-item" href="#">
                            Tara Misu
                          </a>
                          <a className="dropdown-item" href="#">
                            Midge Itz
                          </a>
                          <a className="dropdown-item" href="#">
                            Sal Vidge
                          </a>
                          <a className="dropdown-item" href="#">
                            Other
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="total-comment-block">
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        role="button"
                      >
                        20 Comment
                      </span>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Max Emum
                        </a>
                        <a className="dropdown-item" href="#">
                          Bill Yerds
                        </a>
                        <a className="dropdown-item" href="#">
                          Hap E. Birthday
                        </a>
                        <a className="dropdown-item" href="#">
                          Tara Misu
                        </a>
                        <a className="dropdown-item" href="#">
                          Midge Itz
                        </a>
                        <a className="dropdown-item" href="#">
                          Sal Vidge
                        </a>
                        <a className="dropdown-item" href="#">
                          Other
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                  <a
                    href=""
                    data-bs-toggle="offcanvas"
                    data-bs-target="#share-btn"
                    aria-controls="share-btn"
                  >
                    <i className="ri-share-line"></i>
                    <span className="ms-1">99 Share</span>
                  </a>
                </div>
              </div>
              <hr />
              <ul className="post-comments list-inline p-0 m-0">
                <li className="mb-2">
                  <div className="d-flex">
                    <div className="user-img">
                      <img
                        src="./images/home/user/02.jpg"
                        alt="userimg"
                        className="avatar-35 rounded-circle img-fluid"
                      />
                    </div>
                    <div className="comment-data-block ms-3">
                     
                    </div>
                  </div>
                </li>
                
              </ul>
              <form className="comment-text d-flex align-items-center mt-3">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Enter Your Comment"
                />
                <div className="comment-attagement d-flex">
                  <a href="">
                    <i className="ri-link me-3"></i>
                  </a>
                  <a href="">
                    <i className="ri-user-smile-line me-3"></i>
                  </a>
                  <a href="">
                    <i className="ri-camera-line me-3"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
