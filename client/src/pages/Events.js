import React, { Component } from "react";
import NavBar from "../components/NavBar";
import EventsPage from "../components/EventsPage/EventsPage";

class Events extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <EventsPage />
            </div>
        )
    }
}

export default Events;