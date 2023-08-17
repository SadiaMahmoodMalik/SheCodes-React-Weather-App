import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2 className="current-date">
        <FormattedDate timezone={props.data.timezone} />
      </h2>
      <h1 className="city">
        {props.data.city}, {props.data.country}
      </h1>
      <div className="temperature-container">
        <WeatherTemperature celcius={props.data.temperature} />
      </div>
      <div className="row">
        <div className="col icon-descrp-box flex-column">
          <p className="weather-description text-capitalize">
            {props.data.description}
          </p>
          <div className="weather-icon">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 3.6)} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
