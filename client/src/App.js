import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/Members";
<<<<<<< HEAD
import Events from "./pages/Events";
=======
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
>>>>>>> f1950ad6785d50ace246b5a7b23e21f2a15e9a5a


const Page404 = ({ location }) => (
   <div>
      <h2>404 :(</h2>
   </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={LogIn} />
        <Route path={"/events"} component={Events} />
        <Route path={"/members"} component={Members} />
        <Route path={"/signup"} component={SignUp} />
        <Route path={"/login"} component={LogIn} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;

