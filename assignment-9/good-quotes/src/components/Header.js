import React, { Component } from 'react';
import './header.css';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Good Quotes</p>
      </header>
    );
  }
}

export default Header;
