import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  let backgroundClassName = "card";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      timezone: response.data.timezone,
      icon: response.data.weather[0].icon,
    });
  }

  //changing background
  let time = new Date();
  let localTimeOffset = time.getTimezoneOffset() * 60;
  time.setSeconds(time.getSeconds() + localTimeOffset + weatherData.timezone);
  let hours = time.getHours();
  if (hours >= 20 && hours < 24) {
    backgroundClassName = "card evening";
  }
  if (hours >= 5 && hours < 11) {
    backgroundClassName = "card morning";
  }
  if (hours >= 12 && hours < 17) {
    backgroundClassName = "card midday";
  }
  if (hours >= 17 && hours < 20) {
    backgroundClassName = "card afternoon";
  }

  if (hours >= 0 && hours < 5) {
    backgroundClassName = "card evening";
  }

  function search() {
    const apiKey = "43b685724e0c77779a4487b322bb66db";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  //return result
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className={backgroundClassName}>
          <div className="card-body">
            <h5 className="card-title">Weather Check</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-row d-flex justify-content-center">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Type a city name"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast
              city={weatherData.city}
              country={weatherData.country}
              timezone={weatherData.timezone}
            />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p className="loading">Loading </p>;
  }
}
