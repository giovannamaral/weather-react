import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Rio de Janeiro",
    temperature: 20,
    date: "Thursday 15:55",
    description: "rainy",
    highestTemp: 21,
    lowestTemp: 18,
    humidity: 94,
    feelsLike: 20,
    wind: 3,
  };
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
                        {weatherData.temperature}
                      </div>
                      <span className="temperature-scale">°C </span>
                    </div>
                    <div className="col">
                      <img
                        src="http://openweathermap.org/img/wn/10d@2x.png"
                        alt="rainy"
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
                        {weatherData.highestTemp}
                      </span>
                      °|
                      <strong>L: </strong>
                      <span className="min-temp">{weatherData.lowestTemp}</span>
                      °
                    </div>

                    <div>
                      <strong>Humidity: </strong>
                      <span className="humidity">{weatherData.humidity}</span>%
                    </div>
                    <div>
                      <strong>Feels like: </strong>
                      <span className="feels-like">
                        {weatherData.feelsLike}
                      </span>
                      °
                    </div>
                    <div>
                      <strong>Wind speed: </strong>
                      <span className="wind-speed">{weatherData.wind}</span>
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
      <div>
        <a className="id" href="https://github.com/giovannamaral/weather-react">
          Open-source code
        </a>
        by Giovanna Amaral
      </div>
    </div>
  );
}
