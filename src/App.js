import React from "react";
import Form from "./Components/Form";
import Titles from "./Components/Titles";
import Weather from "./Components/Weather";

const App = () => {
  return (
    <React.Fragment>
      <Titles />
      <Form />
      <Weather />
    </React.Fragment>
  );
};

export default App;
