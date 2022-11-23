import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./CurrentWeatherData.css";

export default function CurrentWeatherData(props) {
  return (
    <div className="CurrentWeatherData">
      <div className="row current-weather-container">
        <div className="row">
          <div className="col-6">
            <div className="clearfix current-weather-temperature">
              <WeatherIcons
                code={props.data.icon}
                size={50}
                id="icon"
                className="float-left"
              />{" "}
              <strong>{props.data.temperature}</strong>
              <span className="units">
                <a href="/" id="celsius">
                  °C
                </a>{" "}
                |{" "}
                <a href="/" id="fahrenheit">
                  °F
                </a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Description: {props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
