import React from "react";
// import './styles.css'

function HomeForm() {
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
          <h2>Who are we?</h2>
          
          <p>LogIn <a href="http://localhost:3000/LogIn">**</a></p> 
        </div>
      </div>
    </div>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
  
  </body>
  );
}

export default HomeForm;