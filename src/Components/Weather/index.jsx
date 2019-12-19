import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import PublicIcon from "@material-ui/icons/Public";
import OpacityIcon from "@material-ui/icons/Opacity";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
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
        const errorMsg = error.response.data.message;
        const capErrorMsg =
          errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1);
        changeErrorMsg(capErrorMsg);
      });
  };

  useEffect(getWeather, [city]);

  const { temperature, country, humidity, description } = weatherData;

  return (
    <div className="result">
      {!errorMsg ? (
        <ul className="result-list">
          <div>
            <WbSunnyIcon />
            <li>
              Temperature:
              <span className="result-value">{temperature} &#x2103;</span>
            </li>
          </div>
          <div>
            <LocationCityIcon />
            <li>
              City:<span className="result-value">{city}</span>
            </li>
          </div>
          <div>
            <PublicIcon />
            <li>
              Country:<span className="result-value">{country}</span>
            </li>
          </div>
          <div>
            <OpacityIcon />
            <li>
              Humidity:<span className="result-value">{humidity}</span>
            </li>
          </div>
          <div>
            <CloudQueueIcon />
            <li>
              Description:<span className="result-value">{description}</span>
            </li>
          </div>
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
