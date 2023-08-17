import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let time = new Date(props.data.dt * 1000);
    let localTimeOffset = time.getTimezoneOffset() * 60;
    time.setSeconds(time.getSeconds() + localTimeOffset + props.timezone);
    let hours = time.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }
  return (
    <div className="col">
      <div className="align-self-center">
        <p className="hour">{hours()}</p>
        <WeatherIcon code={props.data.weather[0].icon} />
        <p> {temperature()}</p>
      </div>
    </div>
  );
}
