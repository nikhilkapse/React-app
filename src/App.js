import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hey </h1>
      </div>
    );
  }
}

export default hot(module)(App);
