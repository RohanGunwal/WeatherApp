import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div className="text-div">
          <input
            type="text"
            className="input-text"
            placeholder="Enter City Name"
            onChange={this.props.takeInput}
          ></input>
        </div>
        <div>
          <button onClick={this.props.btClick} className="btn">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
