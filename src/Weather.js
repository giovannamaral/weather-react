import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "32130c3b8a0437384dedf304822df8d4";
  let city = "Rio de Janeiro";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
                <div className="city">Rio de Janeiro</div>
                <div id="day">Thursday</div>
                <div className="forecast">rainy</div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row align-items-center">
                    <div className="text-center col">
                      <div className="current-temperature">26</div>
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
                      <span className="max-temp">30</span>
                      °|
                      <strong>L: </strong>
                      <span className="min-temp">23</span>°
                    </div>

                    <div>
                      <strong>Humidity: </strong>
                      <span className="humidity">85</span>%
                    </div>
                    <div>
                      <strong>Feels like: </strong>
                      <span className="feels-like">28</span>°
                    </div>
                    <div>
                      <strong>Wind speed: </strong>
                      <span className="wind-speed">16</span>
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
        </a>{" "}
        by Giovanna Amaral
      </div>
    </div>
  );
}
