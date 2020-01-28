import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/Members";
import Events from "./pages/Events";
=======
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
=======
=======
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
        <Route exact path={"/"} component={Home} />
        <Route path={"/events"} component={Events} />
        <Route path={"/members"} component={Members} />
        <Route path={"/signup"} component={SignUp} />
        <Route path={"/login"} component={LogIn} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/home"} component={Home} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;

