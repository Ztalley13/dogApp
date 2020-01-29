import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUp";



class SignUp extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <SignUpForm />
            </div>
        )
    }
}

export default SignUp;