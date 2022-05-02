import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="row">
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
              <WeatherTemperature
                celsius={Math.round(props.data.temperature)}
              />
            </div>
            <div className="col">
              <WeatherIcon code={props.data.icon} size={75} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="more-info">
            <div>
              <strong>Humidity: </strong>
              <span className="humidity">{props.data.humidity}</span>%
            </div>
            <div>
              <strong>Wind speed: </strong>
              <span className="wind-speed">{Math.round(props.data.wind)}</span>
              km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
