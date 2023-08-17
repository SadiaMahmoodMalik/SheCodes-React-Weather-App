import React, { useState } from "react";
import "./WeatherForecast.css";

import WeatherForecastPreview from "./WeatherForecastPreview";

import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForcastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        {forecast.list.slice(0, 5).map(function (forecastItem) {
          return (
            <WeatherForecastPreview
              data={forecastItem}
              timezone={props.timezone}
            />
          );
        })}
      </div>
    );
  } else {
    const apiKey = "43b685724e0c77779a4487b322bb66db";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city},${props.country}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleForcastResponse);
    return null;
  }
}
