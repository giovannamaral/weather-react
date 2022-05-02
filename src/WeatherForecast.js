import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "32130c3b8a0437384dedf304822df8d4";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="WeatherForecast-day col-6">
              <strong>Mon</strong>
            </div>
            <div className="col-6">i</div>
          </div>
        </div>
        <div className="WeatherForecast-temperatures col-6">
          <strong>
            <span className="WeatherForecast-temperature-max">23°</span>|{" "}
            <span className="WeatherForecast-temperature-min">25°</span>
          </strong>
        </div>
      </div>
    </div>
  );
}
