import React from "react";
import CurrentData from "./CurrentData";
import CurrentWeatherData from "./CurrentWeatherData";

import "./WeatherForm.css";

export default function WeatherForm() {
  return (
    <div className="WeatherForm">
      <form className="mb-3">
        <div className="row">
          <div className="col-9 search-form">
            <input
              type="search"
              className="form-control"
              autoFocus="on"
              autoComplete="off"
              id="inlineFormInputName"
              placeholder="Search for a city"
            />
          </div>
          <div className="col-3 search-location-area">
            <button type="search" className="btn btn-primary pull-right w-100">
              Search
            </button>
            <button
              type="button"
              className="btn btn-primary pull-right"
              id="current-location"
            >
              Current
            </button>
          </div>
        </div>
      </form>
      <CurrentData />
      <CurrentWeatherData />
    </div>
  );
}
