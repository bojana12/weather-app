import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import Weather from "./components/Weather";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Search />
        </Route>
        <Route path="/cities/:city">
          <Weather />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
