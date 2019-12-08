import React from "react";
import Axios from "axios";
import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

const apiKey = "aa1142eac2cd6d762d231d2777fe6959";
class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: ""
  };

  getWeather = e => {
    e.preventDefault();
    const city = this.state.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    Axios.get(url).then(response => {
      this.setState({
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description
      });
    });
  };

  onCityChange = newCity =>
    this.setState({
      city: newCity
    });

  resetForm = () => {
    this.setState({
      temperature: "",
      city: "",
      country: "",
      humidity: "",
      description: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <Titles />
        <Form
          city={this.state.city}
          getWeather={this.getWeather}
          resetForm={this.resetForm}
          onCityChange={this.onCityChange}
        />
        <Weather {...this.state} />
      </React.Fragment>
    );
  }
}

export default App;
