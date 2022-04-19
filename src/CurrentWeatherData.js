import React from "react";

import "./CurrentWeatherData.css";

export default function CurrentWeatherData() {
  let currentTemperatureInfo = {
    currentTemperature: 3,
    currentDescription: "Cloudy",
    currentHumidity: 50,
    currentWindSpeed: 5,
  };
  return (
    <div className="CurrentWeatherData">
      <div className="row current-weather-container">
        <div className="col-6 current-weather-img">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="clear"
            id="icon"
            className="float-left"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix current-weather-temperature">
              <div className="float-left">
                <strong>{currentTemperatureInfo.currentTemperature}</strong>
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
          </div>
          <div className="col-6">
            <ul>
              <li>Description: {currentTemperatureInfo.currentDescription}</li>
              <li>Humidity: {currentTemperatureInfo.currentHumidity}%</li>
              <li>Wind: {currentTemperatureInfo.currentWindSpeed} km/h</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
