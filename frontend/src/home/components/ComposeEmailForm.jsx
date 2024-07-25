export const ComposeEmailForm = () => {
  return (
    <>
      <form className="email-form">
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            To:
          </label>
          <div className="col-sm-10">
            <select
              id="inputEmail3"
              className="select2jsMultiSelect form-control"
              multiple="multiple"
            >
              <option value="Petey Cruiser">Petey Cruiser</option>
              <option value="Bob Frapples">Bob Frapples</option>
              <option value="Barb Ackue">Barb Ackue</option>
              <option value="Greta Life">Greta Life</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="cc" className="col-sm-2 col-form-label">
            Cc:
          </label>
          <div className="col-sm-10">
            <select
              id="cc"
              className="select2jsMultiSelect form-control"
              multiple="multiple"
            >
              <option value="Brock Lee">Brock Lee</option>
              <option value="Rick O'Shea">Rick O'Shea</option>
              <option value="Cliff Hanger">Cliff Hanger</option>
              <option value="Barb Dwyer">Barb Dwyer</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="subject" className="col-sm-2 col-form-label">
            Subject:
          </label>
          <div className="col-sm-10">
            <input type="text" id="subject" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="subject" className="col-sm-2 col-form-label">
            Your Message:
          </label>
          <div className="col-md-10">
            <textarea className="textarea form-control" rows="5">
              Next, use our Get Started docs to setup Tiny!
            </textarea>
          </div>
        </div>
        <div className="form-group d-flex flex-wrap align-items-center justify-content-between mb-0">
          <div className="d-flex flex-wrap flex-grow-1 align-items-center">
            <div className="send-btn pl-3 mb-2">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
            <div className="send-panel mb-2">
              <label className="ms-2 mb-0 bg-soft-primary rounded" htmlFor="file">
                {" "}
                <input type="file" id="file" style={{ display: "none" }} />{" "}
                <a>
                  <i className="ri-attachment-line text-primary"></i>{" "}
                </a>{" "}
              </label>
              <label className="ms-2 mb-0 bg-soft-primary rounded">
                {" "}
                <a href="#">
                  {" "}
                  <i className="ri-map-pin-user-line text-primary"></i>
                </a>{" "}
              </label>
              <label className="ms-2 mb-0 bg-soft-primary rounded">
                {" "}
                <a href="#">
                  {" "}
                  <i className="ri-drive-line text-primary"></i>
                </a>{" "}
              </label>
              <label className="ms-2 mb-0 bg-soft-primary rounded">
                {" "}
                <a href="#">
                  {" "}
                  <i className="ri-camera-line text-primary"></i>
                </a>{" "}
              </label>
              <label className="ms-2 mb-0 bg-soft-primary rounded">
                {" "}
                <a href="#">
                  {" "}
                  <i className="ri-user-smile-line text-primary"></i>
                </a>{" "}
              </label>
            </div>
          </div>
          <div className="d-flex mr-3 align-items-center">
            <div className="send-panel float-right">
              <label className="ms-2 mb-0 bg-soft-primary rounded">
                <a href="#">
                  <i className="ri-settings-2-line text-primary"></i>
                </a>
              </label>
              <label className="ms-2 mb-0 bg-soft-primary rounded">
                <a href="#">
                  {" "}
                  <i className="ri-delete-bin-line text-primary"></i>
                </a>{" "}
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
