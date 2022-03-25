import React from "react";

import "./CurrentWeatherData.css";

export default function CurrentWeatherData() {
  return (
    <div className="CurrentWeatherData">
      <div className="row current-weather-container">
        <div className="col current-weather">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="clear"
            id="icon"
            className="float-left"
          />
        </div>
        <div className="row current-weather-container">
          <div className="col current-temperature">
            <span id="current-temperature">
              {currentTemperatureInfo.currentTemperature}{" "}
            </span>
            <span className="temperature-dot">º</span>
            <span className="units">
              <a href="/" id="celsius">
                {" "}
                ºC
              </a>
              <a href="/" id="fahrenheit">
                {" "}
                / ºF
              </a>
            </span>
          </div>

          <div className="row current-weather-container">
            <div className="col weather-humidity-wind-container">
              <div className="weather">
                {currentTemperatureInfo.currentDescription}
              </div>
              <div className="humidity">
                Humidity:{" "}
                <span id="current-humidity">
                  {currentTemperatureInfo.currentHumidity}
                </span>
                %
              </div>
              <div className="wind">
                Wind:{" "}
                <span id="wind-speed">
                  {currentTemperatureInfo.currentWindSpeed}
                </span>{" "}
                km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
