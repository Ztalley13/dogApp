import React, { Component } from "react";
import NavBar from "../components/NavBar/index";
import Main from "../components/Cloudinary/index"
import MemberPortfolio from "../components/MemberPortfolio/index";



class Members extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <MemberPortfolio />
            <Main />
            </div>
        )
    }
}

export default Members;