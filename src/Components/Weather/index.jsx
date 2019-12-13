import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import "./Weather.scss";

const apiKey = "aa1142eac2cd6d762d231d2777fe6959";

const Weather = () => {
  const [weatherData, changeWeatherData] = useState({});
  const [errorMsg, changeErrorMsg] = useState("");
  const { city } = useParams();

  const getWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    Axios.get(url)
      .then(response => {
        changeWeatherData({
          temperature: response.data.main.temp,
          city: response.data.name,
          country: response.data.sys.country,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description
        });
      })
      .catch(error => {
        console.log(error);
        changeErrorMsg(error.response.data.message);
      });
  };

  useEffect(getWeather, [city]);

  const { temperature, country, humidity, description } = weatherData;

  return (
    <div className="result">
      {!errorMsg ? (
        <ul>
          <li>
            <i class="fas fa-temperature-high"></i>
            Temperature:{temperature}
          </li>
          <li>City:{city}</li>
          <li>Country:{country}</li>
          <li>Humidity:{humidity}</li>
          <li>Description:{description}</li>
        </ul>
      ) : (
        <p>{errorMsg}</p>
      )}

      <Link to="/">
        <button className="back-button">Back to Home Page</button>
      </Link>
    </div>
  );
};

export default Weather;
