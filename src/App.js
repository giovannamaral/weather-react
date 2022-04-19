import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rio de Janeiro" />
        <footer>
          <a
            className="id"
            href="https://github.com/giovannamaral/weather-react"
          >
            Open-source code
          </a>{" "}
          by Giovanna Amaral
        </footer>
      </div>
    </div>
  );
}

export default App;
