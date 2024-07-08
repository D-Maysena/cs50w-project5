import React, { useEffect, useState } from 'react'
import { EventsList, Navbar, Sidebar } from '../components'
import { EventCard } from '../components/EventCard'
import { fetchEvent } from '../helpers/api';

export const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            const data = await fetchEvent();
            setEvents(data);
        };
        getEvents();
    }, []);

    return (
        <>
            <Sidebar />
            <Navbar />
            <div className="header-for-bg">
                <div className="background-header position-relative">
                    <img src="../images/home/page-img/profile-bg6.jpg" className="img-fluid w-100" alt="header-bg" />
                    <div className="title-on-header">
                        <div className="data-block">
                            <h2>Your Events</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content-page" className="content-page">
                <div className="container">
                    <div className="d-grid gap-3 d-grid-template-1fr-19">
                        {
                            events.map(item => (

                                <EventCard key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
