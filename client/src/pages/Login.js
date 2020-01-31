import React, { Component } from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginPage";

class Login extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LoginForm />
      </div>
    );
  }
}

export default Login;
