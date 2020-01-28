import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/Members";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Contact from "./pages/Contact"


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
        <Route path={"/members"} component={Members} />
        <Route path={"/signup"} component={SignUp} />
        <Route path={"/login"} component={LogIn} />
        <Route path={"/contact"} component={Contact} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;

