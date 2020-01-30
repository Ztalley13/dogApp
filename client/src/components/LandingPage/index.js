import React, { useState } from "react";
import dummy from "../../dummy.json";
import ImageUploader from "../ImageUploader/index"
import "./style.css";

function LandingPage() {
  const [user, setUser] = useState(dummy[2]);

  return (
    <body>
      <section className="section">
        <div className="container">
          <h1 className="title" id="MembersPage">
            Members Page
          </h1>
          <div classNameName="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/297.98x223.48.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">Jason Hill</p>
        <p className="subtitle is-6">jhill_72@ayhoo.com</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time datetime="2016-1-30">11:09 PM - 30 Jan 2020</time>
    </div>
  </div>
</div>
        
        </div>
      </section>
    </body>
  );
}

export default LandingPage;
