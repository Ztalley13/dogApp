import React from "react";
import Dropdown from "../Dropdown";
import "./style.css"

let labelSize = "By Weight";
let Levels = "Energy Level";

function SignUpForm(props) {
  
  function labelOnchange(e) {
    labelSize = e;
  }
  return (
    <div>
        <div className="notification">
          <h1 style={{textAlign: "center"}}>Sign Up</h1>

          <div className="field">
          <span>Name: </span>
            <p className="control">
              
              <input id="fields"
                value={props.name}
                onChange={e => props.onChange(e, "register")}
                className="input"
                type="name"
                name="name"
                placeholder="Name"
                style={{width: "46%"}}
              />
            </p>
          </div>
          <div className="field">
            
          <span>Username: </span>
            <p className="control has-icons-left">
              <input id="fields"
                onChange={e => props.onChange(e, "register")}
                value={props.username}
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                style={{width: "46%"}}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            
          <span>Password: </span>
            <p className="control has-icons-left">
              <input id="fields"
                onChange={e => props.onChange(e, "register")}
                value={props.password}
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                style={{width: "46%"}}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            
          <span>Dog Name: </span>
            <p className="control">
              <input id="fields"
                onChange={e => props.onChange(e, "register")}
                value={props.dogName}
                className="input"
                type="text"
                name="dogName"
                placeholder="Dog Name"
                style={{width: "46%"}}
              />
            </p>
          </div>
          <div className="field">
            
          <span>Breed: </span>
            <p className="control">
              <input id="fields"
                onChange={e => props.onChange(e, "register")}
                value={props.breed}
                className="input"
                name="breed"
                type="text"
                placeholder="Breed"
                style={{width: "46%"}}
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
            
          <span>Description: </span>
            <p className="control">
              <input id="fields"
                onChange={e => props.onChange(e, "register")}
                value={props.description}
                className="input is-large"
                name="description"
                type="text"
                placeholder="Tell us about you and your dog!"
                style={{width: "46%"}}
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
  );
}

export default SignUpForm;
