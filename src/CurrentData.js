import React from "react";
import "./CurrentData.css";
import FormatDate from "./FormatDate";

export default function CurrentData(props) {
  return (
    <div className="CurrentData">
      <div className="current-data-container">
        <div className="row date-time-location-container">
          <span id="current-city-name">{props.data.city}</span>
          <span id="current-date-time">
            <FormatDate date={props.data.date} />
          </span>
        </div>
      </div>
    </div>
  );
}
