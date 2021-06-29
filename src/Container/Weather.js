import React from 'react';
import DetailView from '../Components/DetailView';
import ForecastShow from '../Components/ForecastShow';
import Loader from '../Components/Loader';
import SearchBar from '../Components/SearchBar';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.searchTextValue = '';
    this.state = { weatherData: [], loading: false, error: false };
    this.searchNow = this.searchNow.bind(this);
    this.takeInput = this.takeInput.bind(this);
  }
  takeInput(e) {
    this.searchTextValue = e.target.value;
  }
  searchNow() {
    if (this.searchTextValue.trim() !== '') {
      this.setState({ loading: true });
      this.giveMeTheData(this.searchTextValue);
    }
  }
  giveMeTheData(searchValue) {
    const url = ` https://api.weatherapi.com/v1/forecast.json?&days=5&key=28cfadb8a88545a49ce195615202309&q=${searchValue}`;
    const promise = fetch(url);
    promise
      .then(response => {
        var p = response.json();
        p.then(data => {
          this.setState({
            weatherData: data.forecast.forecastday,
            loading: false,
          });
        }).catch(err => {
          this.setState({ error: true, loading: false });
        });
      })
      .catch(err => {
        console.log(err, 'Error');
      });
  }
  render() {
    // console.log(this.state.weatherData);
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.searchNow();
      }
    });
    return (
      <div>
        <SearchBar takeInput={this.takeInput} btClick={this.searchNow} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <div>
            <ForecastShow weatherData={this.state.weatherData} />
            <DetailView weatherData={this.state.weatherData} />
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
