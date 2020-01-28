import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Members from "./pages/Members";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


const Page404 = ({ location }) => (
   <div>
      <h2>404 :(</h2>
   </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={} />
        <Route path={"/members"} component={Members} />
        <Route path={"/signup"} component={SignUp} />
        <Route path={"/login"} component={Login} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;

