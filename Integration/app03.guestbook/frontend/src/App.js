import React, { Component } from "react";
import Guestbook from "./Guestbook";
import "./assets/css/App.css";

export default function App() {
  // App: outer
  // .App div : inner
  return (
    <div className={"App"}>
      <div>
        <Guestbook />
      </div>
    </div>
  );
}
