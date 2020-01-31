import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import "./styles.css";
import { getFromStorage, setInStorage } from "../../utils/storage";
import SignUp from "../SignUp";
import axios from "axios";

function LoginForm() {
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  const [token, setToken] = useState(null);

  const [register, setRegistration] = useState({
    name: "",
    dogName: "",
    username: "",
    password: "",
    breed: "",
    // size: "",
    // energy: "",
    description: ""
  });

  useEffect(() => {
    setToken(getFromStorage("dogApp"));
    if (token) {
      //verify token
      fetch("/api/account/verify?token" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            setLoading(false);
            setToken(token);
          } else {
            setLoading(false);
          }
        });
    } else {
      setLoading(false);
    }
  }, []);

  const onChange = (e, type = "login") => {
    console.log(type, e.target.name, e.target.value);
    const f = type === "login" ? setLogin : setRegistration;
    const obj = type === "login" ? login : register;
    const { name, value } = e.target;
    f({ ...obj, [name]: value });
  };

  const onRegister = () => {
    console.log(JSON.stringify(register));
    axios
      .post("/api/account/register", register)
      //.then(res => res)
      .then(({ data }) => {
        if (!data.success) {
          addToast(data.message, { appearance: "error" });
        } else {
          setRegistration({
            name: "",
            dogName: "",
            username: "",
            password: "",
            breed: "",
            // size: "",
            // energy: "",
            description: ""
          });
        }
      })
      .catch(err => console.log("caught", err));
  };

  const onClick = (type, item) => {
    console.log(type, item);
    setRegistration({ ...register, [type.toLowerCase()]: item });
  };

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!token) {
    return (
      <div>
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

        <div className="tile is-ancestor">
          <div className="tile">
            <div className="notification">
              <h1>Sign In</h1>
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={onChange}
                    value={login.username}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={login.password}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-dark">Login</button>
                </p>
              </div>
            </div>
          </div>
          <div class="tile">
            <SignUp
              {...register}
              onSubmit={onRegister}
              onChange={onChange}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
