import React from "react";

function SignUpForm() {
  return (

    
    <body>
         <div className="heading">
    <div className="row">
        <div className="col-8">
        <img id="logo" src="https://tse4.mm.bing.net/th?id=OIP.lpVib3nwr4YfMvR31Yzn7gHaFj&pid=Api&P=0&w=270&h=204 " alt="logo"/>
        <h1>Kibbles {'&'} Brews</h1>
    </div>
    
    </div>
</div>

  {/* <!-- <nav className="navbar navbar-default"> --> */}
    <div className="container-fluid">
      <div className="navbar-header">
      </div>
    </div>
  {/* </nav> */}
  <div className="signUpContainer">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Sign Up Form</h2>
        <form className="signup">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label for="exampleDogGroup1">Dog Info</label>
            <select className="u-full-width" id="exampleRecipientInput">
              <option value="Option 1">Size</option>
              <option value="Option 2">Small</option>
              <option value="Option 3">Medium</option>
              <option value="Option 3">Large</option>
              <option value="Option 3">Extra Large</option>
            </select>
            <select className="u-full-width" id="exampleRecipientInput">
              <option value="Option 1">Energy Level</option>
              <option value="Option 2">Low</option>
              <option value="Option 3">Moderate</option>
              <option value="Option 3">High</option>
            </select>
            <select className="u-full-width" id="exampleRecipientInput">
              <option value="Option 1">Info Section</option>
              <option value="Option 2">Small(less than 16in and less than 22lbs)</option>
              <option value="Option 3">Medium(18in and 40lbs-60lbs)</option>
              <option value="Option 3">Large(24in and 50lbs-100lbs)</option>
              <option value="Option 3">Extra Large(24in and 50lbs-100+lbs)</option>
            </select>

          </div>
          <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span> <span className="msg"></span>
          </div>
          <button type="submit" className="btn btn-default">Sign Up</button>
        </form>
        <br />
        <p>Or log in <a href="/login">here</a></p>
      </div>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/login.js"></script>

    </body>
    );
}

export default SignUpForm;
