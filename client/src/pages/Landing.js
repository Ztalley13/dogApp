import React, { Component } from "react";
import NavBar from "../components/NavBar";
import LandingForm from "../components/LandingPage/index.js";

class Landing extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingForm />
      </div>
    );
  }
}

export default Landing;
