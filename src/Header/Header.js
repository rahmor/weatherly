import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='Header-container'>
      <h1 className='Header-title'>Weatherly</h1>
      <form>
        <input type='search' placeholder='Search by City' />
        <button type='submit'>Search</button>
      </form>
      <h2>Atlanta, Ga</h2>
    </header>
  );
}

export default Header;
