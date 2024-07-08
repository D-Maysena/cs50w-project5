export const CommunityPostItem = ({ post }) => {
  return (
    <>
      <div className="post-item mt-5">
        <div className="user-post-data py-3">
          <div className="d-flex justify-content-between">
            <div className=" me-3">
              <img
                className="rounded-circle img-fluid"
                src="../images/home/user/04.jpg"
                alt=""
              />
            </div>
            <div className="w-100">
              <div className="d-flex justify-content-between">
                <div className="">
                  <h5 className="mb-0 d-inline-block">
                    <a href="#" className="">
                      Yasser Darce
                    </a>
                  </h5>
                  <p className="mb-0">{post.descripcion}</p>
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
                          <i className="ri-save-line h4"></i>
                          <div className="data ms-2">
                            <h6>Save Post</h6>
                            <p className="mb-0">Add this to your saved items</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item p-3" href="#">
                        <div className="d-flex align-items-top">
                          <i className="ri-pencil-line h4"></i>
                          <div className="data ms-2">
                            <h6>Edit Post</h6>
                            <p className="mb-0">
                              Update your post and saved items
                            </p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item p-3" href="#">
                        <div className="d-flex align-items-top">
                          <i className="ri-close-circle-line h4"></i>
                          <div className="data ms-2">
                            <h6>Hide From Timeline</h6>
                            <p className="mb-0">See fewer posts like this.</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item p-3" href="#">
                        <div className="d-flex align-items-top">
                          <i className="ri-delete-bin-7-line h4"></i>
                          <div className="data ms-2">
                            <h6>Delete</h6>
                            <p className="mb-0">
                              Remove thids Post on Timeline
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
        <div className="user-post">
          <a href="">
           
          </a>
        </div>
        <div className="comment-area mt-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="like-block position-relative d-flex align-items-center">
              <div className="d-flex align-items-center">
                <div className="like-data">
                 
                </div>
               
              </div>
           
            </div>
          
          </div>
          <hr />

        </div>
      </div>
    </>
  );
};
