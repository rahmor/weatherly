import React from 'react';
import './DailyWeather.css';

export class DailyWeather extends React.Component {
  displayWeather = () => {
    if (this.props.fetchError) {
      return <h1>Please Enter a Location to get the Weather </h1>;
    } else {
      return (
        <>
          <h3>{this.props.city} Weather</h3>
          <p>as of {this.props.current.time}</p>
          <p>{this.props.current.temp}</p>
          <p>{this.props.current.condition}</p>{' '}
        </>
      );
    }
  };

  render() {
    return (
      <div className='DailyWeather-container'>
        <div className='DailyWeather-temp'>
          {this.props.fetching ? <h1>Loading</h1> : this.displayWeather()}
        </div>
        <div className='DailyWeather-icon'>
          {this.props.fetching ? (
            <h1>Loading</h1>
          ) : (
            <>
              <h3>Weather Icon</h3>
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

export default DailyWeather;
