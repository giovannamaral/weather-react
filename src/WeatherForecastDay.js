import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="WeatherForecast-day col-6">
              <strong>{day()}</strong>
            </div>
            <div className="col-6">
              <WeatherIcon code={props.data.weather[0].icon} size={36} />
            </div>
          </div>
        </div>
        <div className="WeatherForecast-temperatures col-6">
          <strong>
            <span className="WeatherForecast-temperature-max">
              {maxTemperature()}
            </span>
            |{" "}
            <span className="WeatherForecast-temperature-min">
              {minTemperature()}
            </span>
          </strong>
        </div>
      </div>
    </div>
  );
}
