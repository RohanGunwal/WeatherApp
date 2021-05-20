import React from 'react';

import './ForecastList.css';

class ForecastList extends React.Component {
  render() {
    let day = '';
    if (this.props.day === new Date().getDay()) {
      day = 'Today';
    } else {
      switch (this.props.day) {
        case 0:
          day = 'Sun';
          break;
        case 1:
          day = 'Mon';
          break;
        case 2:
          day = 'Tue';
          break;
        case 3:
          day = 'Wed';
          break;
        case 4:
          day = 'Thu';
          break;
        case 5:
          day = 'Fri';
          break;
        case 6:
          day = 'Sat';
          break;
        default:
          day = '';
          break;
      }
    }
    return (
      <div className="card">
        <div className="day-temp">
          <p className="day">{day}</p>
          <p className="avg-temp">
            <span className="tempC">{this.props.avgTemp} </span> <sup>°</sup>
            <span>C</span>
          </p>
        </div>
        <div className="details">
          <div>
            <p className="">{this.props.text}</p>
            <img
              src={this.props.imgSrc}
              alt="weather-icon"
              className="img"
            ></img>
          </div>
          <div className="temp-card">
            <div className="maxTemp">
              <p>Max: </p>
              <span>
                <span className="tempC">{this.props.tempMax}</span> <sup>°</sup>
                <span>C</span>
              </span>
            </div>
            <div className="minTemp">
              <p>Min: </p>
              <span>
                <span>{this.props.tempMin}</span> <sup>°</sup>
                <span>C</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastList;
