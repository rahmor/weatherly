import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import submitCity from '../../actions/actions';

class Header extends React.Component {
  state = {
    city: '',
  };

  updateCity = (event) => {
    this.setState({ city: event.target.value });
  };

  submitCity = (event) => {
    event.preventDefault();
    this.props.dispatch(submitCity(this.state.city));
  };

  render() {
    return (
      <header className='Header-container'>
        <h1 className='Header-title'>Weatherly</h1>
        <form onSubmit={this.submitCity}>
          <label className='App-visually-hidden' htmlFor='location'>
            Search by City
          </label>
          <input
            id='location'
            type='search'
            name='location'
            placeholder='Search by City'
            value={this.state.value}
            onChange={this.updateCity}
          />
          <button type='submit' name='submitCity'>
            Search
          </button>
        </form>
        <h2>{this.props.city}</h2>
      </header>
    );
  }
}

export default connect()(Header);
