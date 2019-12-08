import React, { useState } from "react";

const Form = ({ getWeather, resetForm, onCityChange }) => {
  const [inputValue, changeInputValue] = useState("");

  const handleSubmit = () => {
    onCityChange(inputValue);
  };

  const handleReset = e => {
    e.preventDefault();
    resetForm();
    changeInputValue("");
  };

  return (
    <form onSubmit={getWeather} id="weather-form">
      City name:
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={e => changeInputValue(e.target.value)}
        value={inputValue}
        required
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset the form</button>
    </form>
  );
};

export default Form;
