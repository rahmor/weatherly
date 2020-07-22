import React from 'react';
import './DailyWeather.css';

function DailyWeather() {
  return (
    <div className='DailyWeather-container'>
      <div className='DailyWeather-temp'>
        <h3>Atl, Ga Weather</h3>
        <p>as of 10:00pm</p>
        <p>91</p>
        <p>Partly Cloudy</p>
      </div>
      <div className='DailyWeather-icon'>
        <h3>Weather Icon</h3>
        <p>Hi-93, Lo-75%</p>
      </div>
      <div></div>
    </div>
  );
}

export default DailyWeather;
