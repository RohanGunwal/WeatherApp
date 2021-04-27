import React from 'react';
import ForecastShow from '../Components/ForecastShow';
import SearchBar from '../Components/SearchBar';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.searchTextValue = '';
    this.state = { weatherData: [] };
    this.searchNow = this.searchNow.bind(this);
    this.takeInput = this.takeInput.bind(this);
  }
  takeInput(e) {
    this.searchTextValue = e.target.value;
  }
  searchNow() {
    if (this.searchTextValue.trim() !== '') {
      this.giveMeTheData(this.searchTextValue);
    }
  }
  giveMeTheData(searchValue) {
    const url = ` http://api.weatherapi.com/v1/forecast.json?&days=5&key=28cfadb8a88545a49ce195615202309&q=${searchValue}`;
    const promise = fetch(url);
    promise
      .then(response => {
        var p = response.json();
        p.then(data => {
          this.setState({
            weatherData: data.forecast.forecastday,
          });
        }).catch(err => {
          console.log('Error in JSON', err);
        });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
  render() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.searchNow();
      }
    });
    return (
      <div>
        <SearchBar takeInput={this.takeInput} btClick={this.searchNow} />
        <ForecastShow weatherData={this.state.weatherData} />
      </div>
    );
  }
}

export default Weather;
