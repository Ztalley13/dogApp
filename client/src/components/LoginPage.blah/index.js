import React from "react";
import './styles.css'

function LoginForm() {
  return (
    <body>
    <div class="heading">
      <div class="row">
          <div class="col-8">
          <img id="logo" src="https://tse4.mm.bing.net/th?id=OIP.lpVib3nwr4YfMvR31Yzn7gHaFj&pid=Api&P=0&w=270&h=204 " alt="logo"/>
          <h1>Kibbles {'&'} Brews</h1>
      </div>
      
      </div>
  </div>
  
    {/* <!-- <nav class="navbar navbar-default"> --> */}
      <div class="container-fluid">
        <div class="navbar-header">
        </div>
      </div>
    {/* </nav> */}
    <div class="signUpContainer">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h2>Login</h2>
          <form class="signup">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="email-input" placeholder="Email"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="password-input" placeholder="Password"/>
            </div>
            
            <div style={{display: "none"}} id="alert" class="alert alert-danger" role="alert">
              <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span class="sr-only">Error:</span> <span class="msg"></span>
            </div>
            <button type="submit" class="btn btn-default">Login</button>
          </form>
          <br />
          <a href="http://localhost:3000/home"><button>Home</button></a>
        </div>
      </div>
    </div>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
  
  </body>
  );
}

export default LoginForm;