import "./Mainotherinfo.css";

export default function Mainotherinfo() {
  let otherweatherData = {
    humidity: "20",
    rainfall: "80",
  };

  return (
    <div className="Mainotherinfo">
      <ul className="weatherinfo">
        <li className="todaystats humidity">
          <i className="fas fa-temperature-high"></i> Humidity :
          <span className="humidityvalue" id="currenthumidity">
            {" "}
            {otherweatherData.humidity}%{" "}
          </span>
        </li>
        <li className="todaystats rainfall">
          <i className="fas fa-tint"></i> Rainfall % :
          <span className="rainfallvalue" id="currentrainfall">
            {otherweatherData.rainfall}%
          </span>
        </li>
      </ul>
    </div>
  );
}
