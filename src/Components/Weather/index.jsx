import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      .then(({ data }) => {
        changeWeatherData({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          feelsLike: data.main.feels_like
        });
      })
      .catch(error => {
        const errorMsg = error.response.data.message;
        const capErrorMsg =
          errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1);
        changeErrorMsg(capErrorMsg);
      });
  };

  useEffect(getWeather, [city]);

  const {
    temperature,
    country,
    humidity,
    description,
    feelsLike
  } = weatherData;

  return (
    <div className="result">
      {!errorMsg ? (
        <ul className="result-list">
          <div className="result-item">
            <FontAwesomeIcon icon="temperature-high" />
            <li>
              Temperature:
              <span className="result-value">{temperature} &#x2103;</span>
            </li>
          </div>
          <div className="result-item">
            <FontAwesomeIcon icon="city" />
            <li>
              City:<span className="result-value">{city}</span>
            </li>
          </div>
          <div className="result-item">
            <FontAwesomeIcon icon="globe" />
            <li>
              Country:<span className="result-value">{country}</span>
            </li>
          </div>
          <div className="result-item">
            <FontAwesomeIcon icon="water" />
            <li>
              Humidity:<span className="result-value">{humidity}</span>
            </li>
          </div>
          <div className="result-item">
            <FontAwesomeIcon icon="cloud-sun-rain" />
            <li>
              Description:<span className="result-value">{description}</span>
            </li>
          </div>
          <div className="result-item">
            {feelsLike >= 5 ? (
              <FontAwesomeIcon icon="smile" />
            ) : (
              <FontAwesomeIcon icon="frown" />
            )}
            <li>
              Feels-like:<span className="result-value">{feelsLike}</span>
            </li>
          </div>
        </ul>
      ) : (
        <p className="error-msg">{errorMsg}</p>
      )}

      <Link to="/" className="back">
        <button className="back-button">Back to Home Page</button>
      </Link>
    </div>
  );
};

export default Weather;
