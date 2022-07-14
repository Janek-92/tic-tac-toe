import React, { Component } from 'react';
import './App.css';
import Game from './components/Game.js';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
  return (
    //<div className="App">
      < Game />
   // </div>
  );
 }
}

export default App;
