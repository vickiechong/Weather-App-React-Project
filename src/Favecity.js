import React, { useState } from "react";
import axios from "axios";

import Faveicon from "./Faveicon";

export default function Favecity(props) {
  const [loaded, setLoaded] = useState(false);
  const [favedata, setFavedata] = useState(null);

  function displayfavetemp(response) {
    console.log(response.data);
    setFavedata(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="col-3 text-center">
        <p className="fave1cityname" id="fave1city">
          {favedata.name}
        </p>
        <div className="fave1">
          <Faveicon icon={favedata.weather[0].icon} />
          <span className="fave1temp" id="favecitytemp">
            {Math.round(favedata.main.temp)}
          </span>
          °
        </div>
      </div>
    );
  } else {
    let apikey = `404ebbfe1292f8e13a6dd9e110c25a01`;
    let apiendpoint = `https://api.openweathermap.org/data/2.5/weather?`;
    let favecity = props.city;
    let units = `metric`;
    let apiurl = `${apiendpoint}q=${favecity}&appid=${apikey}&units=${units}`;

    axios.get(apiurl).then(displayfavetemp);

    return null;
  }
}
