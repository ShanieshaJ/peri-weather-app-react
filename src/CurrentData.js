import React from "react";
import "./CurrentData.css";

export default function CurrentData() {
  let cityInfo = {
    currentName: "Montreal",
    currentDay: "Mon",
    currentDate: 25,
    currentMonth: "March",
    currentTime: "12:46 AM",
  };

  return (
    <div className="CurrentData">
      <div className="current-data-container">
        <div className="row date-time-location-container">
          <span id="current-city-name">{cityInfo.currentName}</span>
          <span id="current-date">
            {cityInfo.currentDay}, {cityInfo.currentDate}{" "}
            {cityInfo.currentMonth}
          </span>
          <span id="current-time">{cityInfo.currentTime}</span>
        </div>
      </div>
    </div>
  );
}
