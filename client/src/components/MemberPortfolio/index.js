import React, { useState } from "react";
import dummy from "../../dummy.json";
import "./style.css";

function MemberPortfolio() {
  const [user, setUser] = useState(dummy[2]);

  return (
    <body>
      <section className="section">
        <div className="container">
          <h1 className="title" id="myPage">
            MyPage
          </h1>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <h2 className="title">Hello, I'm {user.userName}</h2>
                <figure className="image is-4by3">
                  <img src={user.images.profileImage} alt="profile image" />
                </figure>
              </div>
              <div className="tile is-child box">
                <h2 className="title">And, this is {user.petName}.</h2>
                <figure className="image is-4by3">
                  <img src={user.images.dogImage} alt="dog image" />
                </figure>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <h2 className="title">About us</h2>
                <p>{user.description}</p>
                <div className="tile is-ancestor">
                  <div className="tile">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="image icon"
                      />
                    </figure>
                  </div>
                  <div className="tile">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="image icon"
                      />
                    </figure>
                  </div>
                  <div className="tile">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/640x480.png"
                        alt="image icon"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default MemberPortfolio;
