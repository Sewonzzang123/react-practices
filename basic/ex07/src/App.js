import logo from "./assets/images/logo.svg";
import React from "react";
import "./assets/css/App.css";

function App() {
  return (
    <div className={"App"}>
      <header className={"App-header"}>
        <img src={logo} className={"App-logo"} alt="logo" />
        <p>React 1Week 과제 입니다.</p>
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
