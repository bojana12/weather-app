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
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/cities/:city" component={Weather} />
      </Switch>
    </Router>
  );
};

export default App;
