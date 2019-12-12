import React, { useState } from "react";
import "./Form.scss";

const Form = ({ getWeather, resetForm }) => {
  const [inputValue, changeInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    getWeather(inputValue);
  };

  const handleReset = e => {
    e.preventDefault();
    resetForm();
    changeInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-weather">
      City name:
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={e => changeInputValue(e.target.value)}
        value={inputValue}
        required
      />
      <button type="submit">Submit</button>
      <button onClick={handleReset}>Reset the form</button>
    </form>
  );
};

export default Form;
