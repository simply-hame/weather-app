import React, { useState } from "react";
import Card from "./components/Card";
import "./index.css";

let src;

function App() {
  const Api_key = "40aabf3ade1a04874575289866d56c55";
  const [weather, setWeather] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${Api_key}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
        });

      setCity("");
    }
  };

  return (
    <div className="App">
      <div className="card">
        <input
          className="input"
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={getWeather}
        ></input>

        {typeof weather.main === "undefined" || weather.cod === "404" ? (
          <div>
            <p>
              Welcome to Weather app! Please Enter in a city to get the weather
              of.
            </p>
            <p>City not found</p>
          </div>
        ) : (
          <Card
            name={weather.name}
            temp={Math.round(weather.main.temp)}
            img={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            disc={weather.weather[0].main}
          />
        )}
      </div>
    </div>
  );
}

export default App;
