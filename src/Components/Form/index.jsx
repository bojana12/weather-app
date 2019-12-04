import React from "react";

const Form = () => {
  return (
    <form>
      <label for="coname">Country name:</label>
      <input type="text" id="coname" name="name" />
      <label for="cname">City name:</label>
      <input type="text" id="cname" name="name" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
