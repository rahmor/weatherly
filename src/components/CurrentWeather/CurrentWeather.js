import React from 'react';
import './CurrentWeather.css';

export class CurrentWeather extends React.Component {
  displayWeather = () => {
    if (this.props.fetchError) {
      return <h1>Please Enter a Location to get the Weather </h1>;
    } else {
      return (
        <>
          <h3>{this.props.city}</h3>
          <h3>Weather</h3>
          <p>as of {this.props.current.time}</p>
          <p>{this.props.current.temp}</p>
          <p>{this.props.current.condition}</p>{' '}
        </>
      );
    }
  };

  render() {
    return (
      <div className='CurrentWeather-container'>
        <div className='CurrentWeather-temp'>
          {this.props.fetching ? <h1>Loading</h1> : this.displayWeather()}
        </div>
        <div className='CurrentWeather-icon'>
          {this.props.fetching ? (
            <h1>Loading</h1>
          ) : (
            <>
              <img src={this.props.current.icon} alt='Weather Icon' />
              <p>
                Hi-{this.props.current.hi}, Lo-{this.props.current.lo}
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
