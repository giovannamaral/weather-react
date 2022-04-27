import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-8">
        <div className="text-center py-4">
          <div className="city">{props.data.city}</div>
          <div id="day">
            <FormattedDate date={props.data.date} />
          </div>
          <div className="forecast">{props.data.description}</div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row align-items-center">
              <div className="text-center col">
                <div className="current-temperature">
                  {Math.round(props.data.temperature)}
                </div>
                <span className="temperature-scale">°C </span>
              </div>
              <div className="col">
                <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  class="current-weather-icon"
                  id="icon"
                ></img>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="more-info">
              <div>
                <strong>H: </strong>
                <span className="max-temp">
                  {Math.round(props.data.highestTemp)}
                </span>
                °|
                <strong>L: </strong>
                <span className="min-temp">
                  {Math.round(props.data.lowestTemp)}
                </span>
                °
              </div>

              <div>
                <strong>Humidity: </strong>
                <span className="humidity">{props.data.humidity}</span>%
              </div>
              <div>
                <strong>Feels like: </strong>
                <span className="feels-like">
                  {Math.round(props.data.feelsLike)}
                </span>
                °
              </div>
              <div>
                <strong>Wind speed: </strong>
                <span className="wind-speed">
                  {Math.round(props.data.wind)}
                </span>
                km/h
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-4 text-center py-5 px-5" id="forecast"></div>
    </div>
  );
}
