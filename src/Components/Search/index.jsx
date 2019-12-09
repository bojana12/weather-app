import React, { useState } from "react";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";

const cities = [
  "Belgrade",
  "Milano",
  "Paris",
  "London",
  "New York",
  "Brisel",
  "Vienna",
  "Budapest",
  "Prague",
  "Las Vegas"
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : cities.filter(
        city => city.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
  <Link to={`/cities/${suggestion}`}>
    <div>{suggestion}</div>
  </Link>
);

const Search = () => {
  const [value, changeValue] = useState("");
  const [suggestions, changeSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    changeValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    changeSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    changeSuggestions([]);
  };

  const inputProps = {
    placeholder: "City...",
    value,
    onChange: onChange
  };

  return (
    <React.Fragment>
      <h1>Weather app</h1>
      <p>Helps you find weather conditions in chosen Country/City</p>

      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </React.Fragment>
  );
};

export default Search;
