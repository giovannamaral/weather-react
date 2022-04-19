import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Thursday 07:00",
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      highestTemp: response.data.main.temp_max,
      lowestTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card card">
          <div className="card-body px-5 py-5">
            <form id="search-form">
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter your city"
                    autoComplete="off"
                  />
                </div>
                <div className="col-4">
                  <button
                    type="search"
                    className="btn btn-light"
                    id="searchButton"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-8">
                <div className="text-center py-4">
                  <div className="city">{weatherData.city}</div>
                  <div id="day">{weatherData.date}</div>
                  <div className="forecast">{weatherData.description}</div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="row align-items-center">
                      <div className="text-center col">
                        <div className="current-temperature">
                          {Math.round(weatherData.temperature)}
                        </div>
                        <span className="temperature-scale">°C </span>
                      </div>
                      <div className="col">
                        <img
                          src={weatherData.iconUrl}
                          alt={weatherData.description}
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
                          {Math.round(weatherData.highestTemp)}
                        </span>
                        °|
                        <strong>L: </strong>
                        <span className="min-temp">
                          {Math.round(weatherData.lowestTemp)}
                        </span>
                        °
                      </div>

                      <div>
                        <strong>Humidity: </strong>
                        <span className="humidity">{weatherData.humidity}</span>
                        %
                      </div>
                      <div>
                        <strong>Feels like: </strong>
                        <span className="feels-like">
                          {Math.round(weatherData.feelsLike)}
                        </span>
                        °
                      </div>
                      <div>
                        <strong>Wind speed: </strong>
                        <span className="wind-speed">
                          {Math.round(weatherData.wind)}
                        </span>
                        km/h
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-4 text-center py-5 px-5" id="forecast"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "32130c3b8a0437384dedf304822df8d4";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
