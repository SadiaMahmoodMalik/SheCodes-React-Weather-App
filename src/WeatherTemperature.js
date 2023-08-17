import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div>
        <p>
          <span className="temperature">{Math.round(props.celcius)}</span>
          <span className="unit celcius active">°C</span>
          <a href="/" className="unit farenheit" onClick={convertToFarenheit}>
            °F
          </a>
        </p>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;

    return (
      <div>
        <p>
          <span className="temperature">{Math.round(farenheit)}</span>
          <a href="/" className="unit celcius" onClick={convertToCelcius}>
            °C
          </a>
          <span className="unit farenheit active">°F</span>
        </p>
      </div>
    );
  }
}
