import React, { Component } from "react";
import MainPage from "./MainPage";

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="mainpage-wrapper">
          <MainPage />
        </div>
      </div>
    );
  }
}
