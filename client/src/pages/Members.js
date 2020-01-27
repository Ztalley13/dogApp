import React, { Component } from "react";
import NavBar from "../components/NavBar";
import MemberPortfolio from "../components/MemberPortfolio";



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