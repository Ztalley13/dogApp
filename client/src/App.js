import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Members from "./pages/Members";


function App() {
  return (
    <Router>
      <Route path={"/members"} component={Members} />
    </Router>
  );
}

export default App;
