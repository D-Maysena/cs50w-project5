export const CommunitiesSuggestedItem = () => {
  return (
    <>
      <li className="mb-3">
        <div className="d-flex align-items-center mb-3">
          <img
            src="./images/home/page-img/icon1.png"
            alt="story-img"
            className="rounded-circle img-fluid avatar-50"
          />
          <div className="stories-data ms-3">
            <h5>Patitas Suaves</h5>
          </div>
        </div>
        <img
          src="./images/home/small/ping.jpg"
          className="img-fluid rounded"
          alt="Responsive image"
        />
        <div className="mt-3">
          <a href="#" className="btn d-block">
            <i className="ri-thumb-up-line me-2"></i> Like Page
          </a>
        </div>
      </li>
    </>
  );
};
