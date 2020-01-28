import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/Members";
<<<<<<< HEAD
import Events from "./pages/Events";
=======
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
<<<<<<< HEAD
>>>>>>> f1950ad6785d50ace246b5a7b23e21f2a15e9a5a
=======
import Contact from "./pages/Contact"
>>>>>>> 15066ac6ee6c640c85ab4a576399909cbbc32592


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
        <Route path={"/contact"} component={Contact} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;

