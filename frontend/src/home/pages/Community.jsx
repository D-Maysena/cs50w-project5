import { useParams } from "react-router-dom";
import {
  CommunityPostForm,
  CommunityPostsList,
  Footer,
  Loading,
  Navbar,
  Sidebar,
} from "../components";
import { useEffect } from "react";
import { useState } from "react";
import { fetchFollowCommunity, fetchJoinCommunity } from "../helpers/api";
import { toast } from "react-toastify";

export const Community = () => {
  const [details, setDetails] = useState({ publicaciones: [] });

  const { id } = useParams();

  useEffect(() => {
    const getCommunityDetails = async () => {
      const data = await fetchJoinCommunity(id);
      setDetails(data);
    };
    getCommunityDetails();
  }, [id]);

  const HandleFollow = async() => {
    const data = await fetchFollowCommunity(details.id)
    setDetails((prevDetails) => ({
      ...prevDetails, sigue_usuario: !prevDetails.sigue_usuario,
    }))
    toast.success(data.message);
  }


  return (
    <>
      <Sidebar />
      <Navbar />

      <div id="content-page" className="content-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                <div className="group-info d-flex align-items-center">
                  <div className="me-3">
                    <img
                      className="rounded-circle img-fluid avatar-100"
                      src="./images/home/page-img/gi-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h4>{ details.nombre }</h4>
                    <p className="mb-0">
                       { details.descripcion }
                    </p>
                  </div>
                </div>
                <div className="group-member d-flex align-items-center  mt-md-0 mt-2">
                  <div className="iq-media-group me-3">
                    <a href="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src="./images/home/user/05.jpg"
                        alt=""
                      />
                    </a>
                    <a href="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src="./images/home/user/06.jpg"
                        alt=""
                      />
                    </a>
                    <a href="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src="./images/home/user/07.jpg"
                        alt=""
                      />
                    </a>
                    <a href="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src="./images/home/user/08.jpg"
                        alt=""
                      />
                    </a>
                    <a href="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src="./images/home/user/09.jpg"
                        alt=""
                      />
                    </a>
                    <a href="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src="./images/home/user/10.jpg"
                        alt=""
                      />
                    </a>
                    <a href="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src="./images/home/user/11.jpg"
                        alt=""
                      />
                    </a>
                    <a href="#" className="iq-media">
                      <img
                        className="img-fluid avatar-40 rounded-circle"
                        src="./images/home/user/12.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                    <button type="button" onClick={HandleFollow} className="btn btn-primary mb-2">
                      <i className="ri-add-line me-1"></i> { details.sigue_usuario ? <span>Dejar de seguir</span>: <span>Seguir</span> }
                    </button>
                  
                </div>
                  
              <div id="paypal-button-container"></div>
                  <div id="result-message"></div>
              </div>
            </div>

            <div className="col-lg-8">
              <CommunityPostForm community_id={details.id} />
              
                <CommunityPostsList posts={details.publicaciones} />

            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
