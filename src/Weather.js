import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "32130c3b8a0437384dedf304822df8d4";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card card">
          <div className="card-body px-5 py-5">
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter your city"
                    autoComplete="off"
                    onChange={handleCityChange}
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
                <WeatherInfo data={weatherData} />
              </div>
              <div className="col-4 text-center py-5 px-5">
                <WeatherForecast coordinates={weatherData.coordinates} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
