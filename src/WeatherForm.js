import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";
import CurrentData from "./CurrentData";
import CurrentWeatherData from "./CurrentWeatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";
import "./WeatherForm.css";

export default function WeatherForm(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function searchCity() {
    let apiKey = "4bac3c024fa4c6ee606313b5c8da3127";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleUpdateCity(event) {
    setCity(event.target.value);
  }

  function handleApiLocation(position) {
    let apiKey = "4bac3c024fa4c6ee606313b5c8da3127";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherForm">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-9 search-form">
              <input
                type="search"
                className="form-control"
                autoFocus="on"
                autoComplete="off"
                id="inlineFormInputName"
                placeholder="Search for a city"
                onChange={handleUpdateCity}
              />
            </div>
            <div className="col-3 search-location-area">
              <button type="search" className="btn btn-primary pull-right">
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
              </button>
              <button
                type="button"
                className="btn btn-primary pull-right"
                id="current-location"
              >
                <FontAwesomeIcon icon={faLocationCrosshairs} />
              </button>
            </div>
          </div>
        </form>
        <CurrentData data={weatherData} />
        <CurrentWeatherData data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return (
      <section className="LoadingIcon">
        <p>Loading, please wait...</p>
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_NIGHT"
          color="rgb(247, 206, 230)"
          size={50}
          animate={true}
        />
      </section>
    );
  }
}
