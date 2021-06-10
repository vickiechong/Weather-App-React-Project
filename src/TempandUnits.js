import React, { useState } from "react";

export default function TempandUnits(props) {
  const [unit, setUnit] = useState("setcelsius");

  function changeFahrenheit(event) {
    event.preventDefault();
    setUnit("setfahrenheit");
  }

  function changeCelsius(event) {
    event.preventDefault();
    setUnit("setcelsius");
  }

  function fahrenheitformula() {
    return Math.round((props.celsiustempcurrent * 9) / 5 + 32);
  }

  if (unit === "setcelsius") {
    return (
      <div className="row">
        <div className="col-6 d-flex justify-content-center">
          <span className="todaytemp" id="currenttemp">
            {props.celsiustempcurrent}
          </span>
        </div>
        <div className="col-6 d-flex">
          <span className="units">
            <a
              href="/#"
              className="tempformat celsius active"
              id="linkCelsius"
              onClick={changeCelsius}
            >
              °C
            </a>
            |
            <a
              href="/#"
              className="tempformat fahrenheit"
              id="linkFahrenheit"
              onClick={changeFahrenheit}
            >
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-6 d-flex justify-content-center">
          <span className="todaytemp" id="currenttemp">
            {fahrenheitformula()}
          </span>
        </div>
        <div className="col-6 d-flex">
          <span className="units">
            <a
              href="/#"
              className="tempformat celsius"
              id="linkCelsius"
              onClick={changeCelsius}
            >
              °C
            </a>
            |
            <a
              href="/#"
              className="tempformat fahrenheit active"
              id="linkFahrenheit"
              onClick={changeFahrenheit}
            >
              °F
            </a>
          </span>
        </div>
      </div>
    );
  }
}
