import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import Search from './components/Search'; 
import Cart from './components/Cart'; 

const Page404 = ({ location }) => (
   <div>
      <h2>404 :(</h2>
   </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          exact path={"/"} 
          component={Search}
        />

        <Route 
          path={"/signup"} 
          component={Cart} 
        />

        <Route 
          path={"/profile"} 
          component={Search}
        />

        <Route 
          component={Page404} 
        />
      </Switch>
    </Router>
  );
}

export default App;

