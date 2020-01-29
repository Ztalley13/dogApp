import React, { Component } from "react";
import NavBar from "../components/NavBar/index";
import MemberPortfolio from "../components/MemberPortfolio/index";



class Members extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <MemberPortfolio />
            </div>
        )
    }
}

export default Members;