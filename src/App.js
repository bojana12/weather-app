import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTemperatureHigh,
  faCity,
  faGlobe,
  faWater,
  faCloudSunRain,
  faSmile,
  faFrown
} from "@fortawesome/free-solid-svg-icons";
import Search from "./components/Search";
import Weather from "./components/Weather";

library.add(
  faTemperatureHigh,
  faCity,
  faGlobe,
  faWater,
  faCloudSunRain,
  faSmile,
  faFrown
);

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
