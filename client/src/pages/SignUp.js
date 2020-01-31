import React from "react";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUp";

function SignUp(props) {
  return (
    <div>
      <NavBar />
      <SignUpForm onChange={props.onChange} />
    </div>
  );
}

export default SignUp;
