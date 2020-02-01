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
        <a className="navbar-item" href="/">
          <img
            alt="#"
            src="https://tse4.mm.bing.net/th?id=OIP.lpVib3nwr4YfMvR31Yzn7gHaFj&pid=Api&P=0&w=270&h=204"
            alt="image icon"
            width="112"
            height="112"
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
          <a className="navbar-item" id="navbar-item" href="/members">
            My Homepage
          </a>

          <a className="navbar-item" href="/events" id="navbar-item">Meet Up</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" id="navbar-item">More</a>

            <div className="navbar-dropdown" id="navbar-item">
              <a className="navbar-item" href="http://localhost:3000/contact">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="/landing">
                Members
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="http://localhost:3000/blog">
                Blog
              </a>

            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-dark" id="signButton">
                <a href="/login"><button id="sign-up">
                  <div className="c1" id="c1"></div>
                  <div className="c2" id="c2"></div>
                  <div className="c3" id="c3"></div>
                  <div className="c4" id="c4"></div>
                  <div className="b1" id="b1">
                    <div class="b2" id="b2">
                      Sign Up/Login
                    </div>
                  </div></button></a>
              </a>
            </div>
          </div>
        </div>
      </div >
    </nav >
  );
}

export default NavBar;
