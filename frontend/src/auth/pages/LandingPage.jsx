import { toast } from "react-toastify";
import { Navbar, Topbar } from "../components";

import "../../assets/landing/lib/flaticon/font/flaticon.css";
import "../../assets/landing/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../assets/landing/css/bootstrap.min.css";
import "../../assets/landing/css/style.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-uppercase text-dark mb-lg-4">
                Amifur
              </h1>
              <h1 className="text-uppercase text-dark mb-lg-4">
                Make Your Pets Happy
              </h1>
              <p className="fs-4 text-dark mb-lg-4">
                Dolore tempor clita lorem rebum kasd eirmod
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <Link
                  to="/login"
                  className="btn btn-outline-primary border-2 py-md-3 px-md-5 me-5"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src="./images/landing/about.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="border-start border-5 border-primary ps-5 mb-5">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5 text-uppercase mb-0">
                  We Keep Your Pets Happy All Time
                </h1>
              </div>
              <h4 className="text-body mb-4">
                Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet
                no labore lorem sit clita duo justo magna dolore
              </h4>
              <div className="bg-light p-4">
                <ul
                  className="nav nav-pills justify-content-between mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item w-50" role="presentation">
                    <button
                      className="nav-link text-uppercase w-100 active"
                      id="pills-1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-1"
                      type="button"
                      role="tab"
                      aria-controls="pills-1"
                      aria-selected="true"
                    >
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item w-50" role="presentation">
                    <button
                      className="nav-link text-uppercase w-100"
                      id="pills-2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-2"
                      type="button"
                      role="tab"
                      aria-controls="pills-2"
                      aria-selected="false"
                    >
                      Our Vission
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-1"
                    role="tabpanel"
                    aria-labelledby="pills-1-tab"
                  >
                    <p className="mb-0">
                      Tempor erat elitr at rebum at at clita aliquyam
                      consetetur. Diam dolor diam ipsum et, tempor voluptua sit
                      consetetur sit. Aliquyam diam amet diam et eos sadipscing
                      labore. Clita erat ipsum et lorem et sit, sed stet no
                      labore lorem sit. Sanctus clita duo justo et tempor
                      consetetur takimata eirmod, dolores takimata consetetur
                      invidunt magna dolores aliquyam dolores dolore. Amet erat
                      amet et magna
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-2"
                    role="tabpanel"
                    aria-labelledby="pills-2-tab"
                  >
                    <p className="mb-0">
                      Tempor erat elitr at rebum at at clita aliquyam
                      consetetur. Diam dolor diam ipsum et, tempor voluptua sit
                      consetetur sit. Aliquyam diam amet diam et eos sadipscing
                      labore. Clita erat ipsum et lorem et sit, sed stet no
                      labore lorem sit. Sanctus clita duo justo et tempor
                      consetetur takimata eirmod, dolores takimata consetetur
                      invidunt magna dolores aliquyam dolores dolore. Amet erat
                      amet et magna
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="text-primary text-uppercase">Services</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Our Excellent Pet Care Services
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-house display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <Link className="text-primary text-uppercase" to="/">
                    Read More<i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-food display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <Link className="text-primary text-uppercase" to="/">
                    Read More<i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-grooming display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <Link className="text-primary text-uppercase" to="/">
                    Read More<i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-cat display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Training</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <Link className="text-primary text-uppercase" to="/">
                    Read More<i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-dog display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <Link className="text-primary text-uppercase" to="/">
                    Read More<i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-vaccine display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <Link className="text-primary text-uppercase" to="/">
                    Read More<i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className="container-fluid bg-light mt-5 py-5">
        <div className="container pt-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Get In Touch</h5>
                    <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                    <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                    <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</Link>
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link>
                        <Link className="text-body" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Popular Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</Link>
                        <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link>
                        <Link className="text-body" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Newsletter</h5>
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control p-3" placeholder="Your Email" />
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
                    <div className="d-flex">
                        <Link className="btn btn-outline-primary btn-square me-2" to="/"><i className="bi bi-twitter"></i></Link>
                        <Link className="btn btn-outline-primary btn-square me-2" to="/"><i className="bi bi-facebook"></i></Link>
                        <Link className="btn btn-outline-primary btn-square me-2" to="/"><i className="bi bi-linkedin"></i></Link>
                        <Link className="btn btn-outline-primary btn-square" to="/"><i className="bi bi-instagram"></i></Link>
                    </div>
                </div>
                <div className="col-12 text-center text-body">
                    <Link className="text-body" to="/">Terms & Conditions</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">Privacy Policy</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">Customer Support</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">Payments</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">Help</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">FAQs</Link>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">&copy; <Link className="text-white" to="/">Your Site Name</Link>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0">Designed by <Link className="text-white" to="/ttps://htmlcodex.com">HTML Codex</Link></p>
                </div>
            </div>
        </div>
    </div>


    <Link to="#" className="btn btn-primary py-3 fs-4 back-to-top"><i className="bi bi-arrow-up"></i></Link>
    </>
  );
};
