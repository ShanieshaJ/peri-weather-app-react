import React from "react";
import "./CurrentData.css";

export default function CurrentData() {
  let cityInfo = {
    currentName: "Montreal",
    currentDay: "Friday",
    currentDate: 25,
    currentMonth: "March",
    currentTime: "11:30 AM",
  };

  return (
    <div className="CurrentData">
      <div className="current-data-container">
        <div className="row date-time-location-container">
          <span id="current-city-name">{cityInfo.currentName}</span>
          <span id="current-date-time">
            Last Updated on: {cityInfo.currentDay}, {cityInfo.currentDate}{" "}
            {cityInfo.currentMonth} at {cityInfo.currentTime}
          </span>
        </div>
      </div>
    </div>
  );
}
