import React from "react";
import Dropdown from "../Dropdown";
let labelSize = "By Weight";
let Levels = "Energy Level";
function SignUpForm(props) {
  
  function labelOnchange(e) {
    labelSize = e;
  }
  return (
    <div>
      <div className="container" id="container">
        <div className="notification">
          <h1>Sign Up</h1>
          <div className="field">
            <p className="control">
              <span>Name: </span>
              <input
                value={props.name}
                onChange={e => props.onChange(e, "register")}
                className="input"
                type="name"
                name="name"
                placeholder="Name"
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <span>Username: </span>
              <input
                onChange={e => props.onChange(e, "register")}
                value={props.username}
                className="input"
                type="text"
                name="username"
                placeholder="Username"
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <span>Password: </span>
              <input
                onChange={e => props.onChange(e, "register")}
                value={props.password}
                className="input"
                type="password"
                name="password"
                placeholder="Password"
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <span>Dog Name: </span>
              <input
                onChange={e => props.onChange(e, "register")}
                value={props.dogName}
                className="input"
                type="text"
                name="dogName"
                placeholder="Dog Name"
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <span>Breed: </span>
              <input
                onChange={e => props.onChange(e, "register")}
                value={props.breed}
                className="input"
                name="breed"
                type="text"
                placeholder="Breed"
              />
            </p>
          </div>
          <Dropdown
            onClick={props.onClick}
            labelOnchange={labelOnchange}
            onChange={props.onChange}
            label={"Size"}
            buttonLabel={labelSize}
            items={[
              "Small: Less than 22lbs.",
              "Medium: 22-57lbs.",
              "Large: 58-99lbs.",
              "X-Large: Over 100lbs."
            ]}
          />
          <Dropdown
            onClick={props.onClick}
            onChange={props.onChange}
            label={"Energy"}
            buttonLabel={Levels}
            items={["Low", "Moderate", "High"]}
          />
          <div className="field">
            <p className="control">
              <span>Description: </span>
              <input
                onChange={e => props.onChange(e, "register")}
                value={props.description}
                className="input is-large"
                name="description"
                type="text"
                placeholder="Tell us about you and your dog!"
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button onClick={props.onSubmit} className="button is-dark">
                Sign Up
              </button>
            </p>
          </div>
          <div className="field"></div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
