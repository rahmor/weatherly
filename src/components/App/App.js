import React from 'react';
import Header from '../Header/Header';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import lodash from 'lodash';
import { connect } from 'react-redux';
import { fetchWeather, updateCity } from '../../actions/actions';
import './App.css';

export class App extends React.Component {
  state = {
    CITIES: {
      'New York': [40.7127281, -74.0060152],
      Atlanta: [33.7490987, -84.3901849],
      'Los Angeles': [34.0536909, -118.2427666],
      Miami: [25.7741728, -80.19362],
      'San Francisco': [37.7790262, -122.4199061],
      Chicago: [41.8755616, -87.6244212],
      'Washington, DC': [38.8949855, -77.0365708],
      Boston: [42.3602534, -71.0582912],
    },
  };

  componentDidMount() {
    let cities = Object.keys(this.state.CITIES);
    let city = lodash.sample(cities);
    this.props.fetchWeather(this.state.CITIES[city]);
    this.props.updateCity(city);
  }

  render() {
    return (
      <div className='App'>
        <section className='App-frame-frosted'>
          <Header {...this.props} />
          <main>
            <CurrentWeather {...this.props} />
          </main>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  fetchWeather,
  updateCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
