import { EventItem } from "./EventItem";

export const EventsList = () => {
  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title">Eventos</h4>
          </div>
          <div className="card-header-toolbar d-flex align-items-center">
            <div className="dropdown">
              <div
                className="dropdown-toggle"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i className="ri-more-fill h4"></i>
              </div>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  <i className="ri-eye-fill me-2"></i>View
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ri-delete-bin-6-fill me-2"></i>Delete
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ri-pencil-fill me-2"></i>Edit
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ri-printer-fill me-2"></i>Print
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ri-file-download-fill me-2"></i>Download
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="media-story list-inline m-0 p-0">
            
            <EventItem />
          </ul>
        </div>
      </div>
    </>
  );
};
