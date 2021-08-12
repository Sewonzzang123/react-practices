import React, { Component } from "react";
import GuestbookApp from "./GuestbookApp";
import "./assets/css/App.css";

export default function App() {
  // App: outer
  // .App div : inner
  return (
    <div className={"App"}>
      <div>
        <GuestbookApp />
      </div>
    </div>
  );
}
