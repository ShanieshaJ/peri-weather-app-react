import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import WeatherForm from "./WeatherForm";

export default function App() {
  return (
    <div className="App">
      <WeatherForm />
      <footer className="source">
        <small>
          <a
            href="https://github.com/ShanieshaJ/peri-weather-app-react"
            target="_blank"
            id="projectLink"
            rel="noopener noreferrer"
          >
            Open-source code{" "}
          </a>
          by Shaniesha John
        </small>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
