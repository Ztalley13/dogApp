import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Members from "./pages/Members";
import Events from "./pages/Events";


function App() {
  return (
    <Router>
      <Route path={"/members"} component={Members} />
      <Route path={"/events"} component={Events} />
    </Router>
  );
}

export default App;
