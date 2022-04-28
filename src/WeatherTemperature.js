import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="current-temperature">{Math.round(props.celsius)}</div>
        <span className="temperature-scale">
          °C |{" "}
          <a
            href="/"
            className="text-decoration-none text-white"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="current-temperature">{Math.round(fahrenheit())}</div>
        <span className="temperature-scale">
          <a
            href="/"
            className="text-decoration-none text-white"
            onClick={showCelsius}
          >
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
