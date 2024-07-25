export const CreatePostForm = () => {
  return (
    <>
      <div className="modal-dialog   modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="post-modalLabel">
              Create Post
            </h5>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="ri-close-fill"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="d-flex align-items-center">
              <div className="user-img">
                <img
                  src="./images/home/user/1.jpg"
                  alt="userimg"
                  className="avatar-60 rounded-circle img-fluid"
                />
              </div>
              <form className="post-text ms-3 w-100">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Write something here..."
                  style={{ border: "none" }}
                />
              </form>
            </div>
            <hr />
            <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
              <li className="col-md-6 mb-3">
                <div className="bg-soft-primary rounded p-2 pointer me-3">
                  <a href="#"></a>
                  <img
                    src="./images/home/small/07.png"
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Photo/Video
                </div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="bg-soft-primary rounded p-2 pointer me-3">
                  <a href="#"></a>
                  <img
                    src="./images/home/small/08.png"
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Tag Friend
                </div>
              </li>

              <li className="col-md-6 mb-3">
                <div className="bg-soft-primary rounded p-2 pointer me-3">
                  <a href="#"></a>
                  <img
                    src="./images/home/small/12.png"
                    alt="icon"
                    className="img-fluid"
                  />{" "}
                  Gif
                </div>
              </li>
            </ul>
            <hr />
            <button
              type="submit"
              className="btn btn-primary d-block w-100 mt-3"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
