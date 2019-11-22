import React, { Fragment, Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import { Header } from "./header/header";
import { NavBar } from "./navBar/navbar";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <NavBar />
      </Fragment>
    );
  }
}

export default hot(module)(App);
