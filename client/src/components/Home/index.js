import React from "react";
import "./style.css";

function HomeForm() {
  return (
    <body>
      <div className="heading">
        <div className="row">
          <div className="col-8">
            <img
              id="logo"
              src="https://tse4.mm.bing.net/th?id=OIP.lpVib3nwr4YfMvR31Yzn7gHaFj&pid=Api&P=0&w=270&h=204 "
              alt="logo"
            />
            <h1>Kibbles {"&"} Brews</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="navbar-header"></div>
      </div>
      <div className="signUpContainer">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Who are we?</h2>
            <p>
              Kibble’s {"&"} Brews is a social media platform for dog/beer
              lovers who want to be social. This page has been created to
              support anyone who wishes to join a group for their chosen breed
              of dog, and socialize with fellow dog lovers. We pride ourselves
              on bringing like minded people together so that they can share
              stories, photos and for asking questions about specific topics. 
            </p>
            <br></br>
            <p>
              LogIn{" "}
              <a href="/login" id="login-link">
                **
              </a>
            </p>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script type="text/javascript" src="js/login.js"></script>
    </body>
  );
}

export default HomeForm;
