import React, { useState } from "react";
import axios from "axios";

function Logout() {
    [login, setLogin] = useState()

const onLogout = () => {
    axios
    .delete("/api/account/logout") 
}

    return (
        <div className="button is-dark" id="signButton">
                <a href="/login"><button id="sign-up" onClick={onLogout}>
                  <div className="c1" id="c1"></div>
                  <div className="c2" id="c2"></div>
                  <div className="c3" id="c3"></div>
                  <div className="c4" id="c4"></div>
                  <div className="b1" id="b1">
                    <div className="b2" id="b2">
                      Logout
                    </div>
                  </div></button></a>
              </div>
    )
}

export default Logout;