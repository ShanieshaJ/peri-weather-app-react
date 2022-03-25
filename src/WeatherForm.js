import React from "react";

import "./WeatherForm.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrentData from "./CurrentData";
import CurrentWeatherData from "./CurrentWeatherData";

export default function WeatherForm() {
  return (
    <div className="WeatherForm">
      <form className="mb-3">
        <div className="row">
          <div className="col search-form">
            <input
              type="search"
              className="form-control"
              autoFocus="on"
              id="inlineFormInputName"
              placeholder="Search for a city"
            />
          </div>
          <div className="col-5 search-location-area">
            <button type="search" className="btn btn-primary pull-right">
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
