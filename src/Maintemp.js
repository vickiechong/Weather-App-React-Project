import Mainotherinfo from "./Mainotherinfo";
import "./Maintemp.css";

export default function Maintemp() {
  let weatherData = {
    city: "Seoul",
    day: "5",
    month: "4",
    time: "12:00",
    currentemp: "2",
    imgurl: "http://openweathermap.org/img/wn/10d@2x.png",
    humidity: "60",
    rainfall: "30",
  };

  return (
    <div className="Maintemp">
      <div className="todaycountryandtemp">
        <h1 className="countrydisplay" id="displaysearchcountry">
          Seoul
        </h1>
        <h2 className="todaydatemain">
          <div className="row justify-content-center">
            <div className="todaymain">
              Today
              <span className="datemain" id="currentdate">
                {" "}
                {weatherData.day}{" "}
              </span>
              /
              <span className="monthmain" id="currentmonth">
                {" "}
                {weatherData.month}{" "}
              </span>
            </div>
          </div>
          <div className="timemain" id="currenttime">
            {weatherData.time}
          </div>
          <br />
        </h2>
        <h3 className="todaytempmain">
          <div className="row todaytempall">
            <div className="col-1 space"></div>
            <div className="col">
              <div className="row">
                <div className="col-4 d-flex align-items-center justify-content-center">
                  <img
                    src="{weatherData.imgurl}"
                    alt=""
                    id="todayicon"
                    className="todayicon"
                    width=""
                  />
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <span className="todaytemp" id="currenttemp">
                    2
                  </span>
                </div>
                <div className="col-4 d-flex">
                  <span className="units">
                    <a
                      href="/#"
                      className="tempformat celsius active"
                      id="linkCelsius"
                    >
                      °C
                    </a>
                    |
                    <a
                      href="/#"
                      className="tempformat fahrenheit"
                      id="linkFahrenheit"
                    >
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <span className="col-1 space"></span>
          </div>
        </h3>
      </div>
      <Mainotherinfo />
    </div>
  );
}
