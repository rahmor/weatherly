import React from 'react';
import './App.css';

function App() {
  return (
    <main className='App'>
      <section className='App-daily'>
        <header className='App-daily-header'>
          <h1 className='App-title'>Weatherly</h1>
        </header>
        <form>
          <input type='search' placeholder='Search by City' />
          <button type='submit'>Search</button>
        </form>
        <h2>Atlanta, Ga</h2>
      </section>
    </main>
  );
}

export default App;
