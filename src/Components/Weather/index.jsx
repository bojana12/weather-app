import React from "react";
import "./Weather.scss";

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  reset
}) => {
  return (
    <div>
      {city && country && (
        <ul className={reset ? "hide" : ""}>
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
