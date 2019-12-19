import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import Axios from "axios";
import "./Search.scss";

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
  <Link to={`/cities/${suggestion}`}>
    <div>{suggestion}</div>
  </Link>
);

const Search = () => {
  const [value, changeValue] = useState("");
  const [suggestions, changeSuggestions] = useState([]);
  const history = useHistory();

  const onChange = (event, { newValue, method }) => {
    changeValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    getCities(value);
  };

  const onSuggestionsClearRequested = () => {
    changeSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === "enter") {
      history.push(`/cities/${suggestion}`);
    }
  };

  const inputProps = {
    placeholder: "City...",
    value,
    onChange: onChange,
    autoFocus: true
  };

  const apiKey = "AIzaSyCVfiQ54AOkAtg73o3QXz8etvQCzCAFquw";

  const getCities = inputValue => {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${inputValue}&types=(cities)&key=${apiKey}`;

    Axios.get(url)
      .then(response => {
        const cities = response.data.predictions.map(city => city.description);
        console.log(cities);
        changeSuggestions(cities);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="search-container">
      <h1>Weather app</h1>
      <h3>Helps you find weather conditions in chosen City</h3>

      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
        highlightFirstSuggestion={true}
      />
    </div>
  );
};

export default Search;
