import React, { Component } from "react";
import NavBar from "../components/NavBar";
import LogInForm from "../components/LoginPage";

class LogIn extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LogInForm />
      </div>
    );
  }
}

export default LogIn;
