import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote/Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Quote />
        </main>
      </div>
    );
  }
}

export default App;
