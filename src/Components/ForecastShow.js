import React from 'react';
import ForecastList from './ForecastList';
import './ForecastShow.css';

import { nanoid } from 'nanoid';

class ForecastShow extends React.Component {
  render() {
    // console.log(this.props.weatherData);
    return (
      <div className="container">
        {this.props.weatherData.map(e => (
          <ForecastList
            key={nanoid()}
            day={new Date(e.date).getDay()}
            text={e.day.condition.text}
            imgSrc={e.day.condition.icon}
            avgTemp={e.day.avgtemp_c}
            tempMax={e.day.maxtemp_c}
            tempMin={e.day.mintemp_c}
          />
        ))}
      </div>
    );
  }
}

export default ForecastShow;
