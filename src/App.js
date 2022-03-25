import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import WeatherForm from "./WeatherForm";

export default function App() {
  return (
    <div className="App">
      <WeatherForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
