import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ContactPage from "../components/contact";



class Contact extends Component {
    render() {
        return (
            <div>
            <NavBar {...this.props} />
            <ContactPage />
            </div>
        )
    }
}

export default Contact;