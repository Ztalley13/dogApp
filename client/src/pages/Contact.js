import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ContactPage from "../components/contact/Contact";



class Contact extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <ContactPage />
            </div>
        )
    }
}

export default Contact;