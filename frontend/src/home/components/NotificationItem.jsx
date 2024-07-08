import { Link } from "react-router-dom";

export const NotificationItem = () => {
  return (
    <>
      <Link to="#" className="iq-sub-card">
        <div className="d-flex align-items-center">
          <div className="">
            <img
              className="avatar-40 rounded"
              src="./images/home/user/01.jpg"
              alt=""
            />
          </div>
          <div className="ms-3 w-100">
            <h6 className="mb-0 ">Emma Watson Bni</h6>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">95 MB</p>
              <small className="float-right font-size-12">Just Now</small>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
