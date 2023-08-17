import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lahore,PK" />

        <div className="footer">
          <p className="info-text">
            <a
              href="https://github.com/SadiaMahmoodMalik/SheCodes-React-Weather-App/tree/master"
              rel="noreferrer"
              target="_blank"
            >
              Code Link
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/sadiamahmood/"
              rel="noreferrer"
              target="_blank"
            >
              Sadia Mahmood
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
