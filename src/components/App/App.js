import React from 'react';
import Header from '../Header/Header';
import DailyWeather from '../DailyWeather/DailyWeather';
import { connect } from 'react-redux';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <section className='App-frame-frosted'>
          <Header {...this.props} />
          <main>
            <DailyWeather {...this.props} />
          </main>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
