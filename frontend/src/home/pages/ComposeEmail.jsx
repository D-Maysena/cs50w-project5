import { ComposeEmailForm, Footer, Loading, Navbar, Sidebar } from "../components";

export const ComposeEmail = () => {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div id="content-page" className="content-page">
        <div className="container">
          <div className="row row-eq-height">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="card iq-border-radius-20">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <h5 className="text-primary card-title">
                            <i className="ri-pencil-fill"></i> Compose Message
                          </h5>
                        </div>
                      </div>
                      <ComposeEmailForm />
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
