import React from 'react'

export const EventCard = ({ item }) => {
    return (
        <>
            <div className="">
                <div className="card rounded  mb-0">
                    <div className="event-images">
                        <a href="#">
                            <img src="../images/home/page-img/vacu.jpg" className="img-fluid" alt="Responsive image" />
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="date-of-event">
                                <span>{ item.fecha }</span>
                            </div>
                            <div className="events-detail ms-3">
                                <h5>{ item.nombre }</h5>
                                <p>{ item.descripcion }</p>
                                <div className="event-member">
                                    <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                            <img className="img-fluid avatar-40 rounded-circle" src="../assets/images/user/05.jpg" alt="" />
                                        </a>
                                        <a href="#" className="iq-media">
                                            <img className="img-fluid avatar-40 rounded-circle" src="../assets/images/user/06.jpg" alt="" />
                                        </a>
                                        <a href="#" className="iq-media">
                                            <img className="img-fluid avatar-40 rounded-circle" src="../assets/images/user/07.jpg" alt="" />
                                        </a>
                                        <a href="#" className="iq-media">
                                            <img className="img-fluid avatar-40 rounded-circle" src="../assets/images/user/08.jpg" alt="" />
                                        </a>
                                        <a href="#" className="iq-media">
                                            <img className="img-fluid avatar-40 rounded-circle" src="../assets/images/user/09.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
