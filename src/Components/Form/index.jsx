import React from "react";

const Form = ({ getWeather, resetForm }) => {
  return (
    <form onSubmit={getWeather}>
      Country name:
      <input type="text" name="country" placeholder="Country" required />
      City name:
      <input type="text" name="city" placeholder="City" required />
      <button>Submit</button>
      <button onClick={resetForm}>Reset the form</button>
    </form>
  );
};

export default Form;
