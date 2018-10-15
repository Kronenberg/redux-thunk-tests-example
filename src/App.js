import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
// @COMPONENTS
import MyComponent from './Component/MyComponent';
import ListComponent from './ListComponent/ListComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent />
        <ListComponent />
      </div>
    );
  }
}

export default connect()(App);
