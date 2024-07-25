import { Link } from "react-router-dom";

export const FriendRequestItem = () => {
  return (
    <>
      <div className="iq-friend-request">
        <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              className="avatar-40 rounded"
              src="./images/home/user/01.jpg"
              alt=""
            />
            <div className="ms-3">
              <h6 className="mb-0 ">Jaques Amole</h6>
              <p className="mb-0">40 friends</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Link to="/home" className="me-3 btn btn-primary rounded">
              Confirm
            </Link>
            <Link to="/home" className="me-3 btn btn-secondary rounded">
              Delete Request
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
