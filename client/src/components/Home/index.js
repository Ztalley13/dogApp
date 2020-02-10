import React from "react";
import './style.css'
function HomeForm() {
  return (
    <body>
    <div className="heading">
      <div className="row">
          <div className="col-8">
          <img id="logo" src="https://tse4.mm.bing.net/th?id=OIP.lpVib3nwr4YfMvR31Yzn7gHaFj&pid=Api&P=0&w=270&h=204" alt="logo"/>
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
        <div className="col-md-6 col-md-3">
          <p className="home-info">Welcome to Kibbles and Brews!</p>
          <br></br>
          <p className="home-info">
            Howdy! We know you have a dog. We all do! But you don't have human friends. It's okay, neither do we. 
            Enter Kibbles and Brews, a social site that allows you and your K-9 to meet other folks in pet friendly places.
            Browse our events list, or make your own event! We don't care. Just sign up now.
          </p>
          
          <br>
          </br>
          <a href="http://localhost:3000/LogIn"><button className="button is-dark">Get Started!</button></a>
        </div>
      </div>
    </div>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
  
  </body>
  );
}
export default HomeForm;