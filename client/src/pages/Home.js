import React, { Component } from "react";
import NavBar from "../components/NavBar";
import HomeForm from "../components/Home/index.js/index.js.js";



class Home extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <HomeForm />
            </div>
        )
    }
}

export default Home;