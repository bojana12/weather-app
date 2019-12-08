import React from "react";
import "./Weather.scss";

const Weather = ({
  temperature,
  city,
  humidity,
  description,
  reset,
  country
}) => {
  return (
    <div>
      {city && (
        <ul>
          <li>Temperature:{temperature}</li>
          <li>City:{city}</li>
          <li>Country:{country}</li>
          <li>Humidity:{humidity}</li>
          <li>Description:{description}</li>
        </ul>
      )}
    </div>
  );
};

export default Weather;
