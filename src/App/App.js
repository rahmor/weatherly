import React from 'react';
import Header from '../Header/Header';
import DailyWeather from '../DailyWeather/DailyWeather';
import './App.css';

function App() {
  return (
    <div className='App'>
      <section className='App-frame-frosted'>
        <Header />
        <main>
          <DailyWeather />
        </main>
      </section>
    </div>
  );
}

export default App;
