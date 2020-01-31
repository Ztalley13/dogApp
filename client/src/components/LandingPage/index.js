import React, { Component } from "react";
import dummy from "../../dummy.json";
import "./style.css";

function LandingPage(props) {

  return (
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={props.profileImage}
                alt="my image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={props.dogImage}
                    alt="dog image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{props.name}</p>
                <p className="subtitle is-6">{props.pet}</p>
              </div>
            </div>

            <div className="content">
              {props.description}
              <br />
            </div>
          </div>
        </div>
      </div>
  );
}

export default LandingPage;
