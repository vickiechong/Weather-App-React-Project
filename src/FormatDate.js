import React from "react";

// date/time using currentime intended, not last updated time by openweather

export default function FormatDate() {
  let nowtime = new Date();
  let date = nowtime.getDate();
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let month = months[nowtime.getMonth()];

  let hours = nowtime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = nowtime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="FormatDateCurrentTime row justify-content-center">
      <div className="row justify-content-center">
        <div className="todaymain">Today</div>
        <div>
          <span className="datemain" id="currentdate">
            {date}{" "}
          </span>
          /
          <span className="monthmain" id="currentmonth">
            {" "}
            {month}
          </span>
        </div>
      </div>
      <div className="timemain" id="currenttime">
        {hours}:{minutes}
      </div>
    </div>
  );
}