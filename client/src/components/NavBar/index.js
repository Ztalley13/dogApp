import React from "react";
import "./style.css";

function NavBar() {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand" id="navbar-brand">
        <a className="navbar-item" href="http://localhost:3000/">
          <img
            alt="#"
            src="https://tse4.mm.bing.net/th?id=OIP.lpVib3nwr4YfMvR31Yzn7gHaFj&pid=Api&P=0&w=270&h=204"
            alt="image icon"
            width="112"
            height="28"
          />
        </a>

        <label
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          htmlFor="nav-toggle-state"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </label>
      </div>
      <input type="checkbox" id="nav-toggle-state" />

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" id="navbar-item" href="http://localhost:3000/">
            Home
          </a>

          <a className="navbar-item" id="navbar-item">Meet Up</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" id="navbar-item">More</a>

            <div className="navbar-dropdown" id="navbar-item">
              <a className="navbar-item" href="http://localhost:3000/contact">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="http://localhost:3000/faq">
                Questions
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="http://localhost:3000/events">
                Make a Post
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="http://localhost:3000/members">
                Member Page
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-dark" id="signButton">
                <button id="sign-up">Sign Up</button>
              </a>
              <a href="http://localhost:3000/LogIn">
                <button id="log-in">Login</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;