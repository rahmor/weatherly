import React from 'react';
import Header from '../Header/Header';
import DailyWeather from '../DailyWeather/DailyWeather';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className='App'>
      <section className='App-frame-frosted'>
        <Header {...props} />
        <main>
          <DailyWeather {...props} />
        </main>
      </section>
    </div>
  );
}

function mapStateToProps(state) {
  const { city } = state;
  return { city };
}

export default connect(mapStateToProps)(App);
