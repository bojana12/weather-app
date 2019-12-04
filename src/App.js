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
    description: "",
    reset: false
  };

  getWeather = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

    Axios.get(url).then(response => {
      this.setState({
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description
      });
      console.log(this.state);
    });
  };

  resetForm = () => {
    this.setState(prevState => ({
      reset: !prevState.reset
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Titles />
        <Form
          getWeather={this.getWeather}
          city={this.state.city}
          country={this.state.country}
          resetForm={this.resetForm}
        />
        <Weather {...this.state} />
      </React.Fragment>
    );
  }
}

export default App;
